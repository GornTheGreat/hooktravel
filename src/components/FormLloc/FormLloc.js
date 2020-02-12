import Axios from "axios"
import Mapa from '../Mapa/Mapa.vue'
import EventBus from "../EventBus/EventBus.vue"

export default {
    name: 'FormLloc',
    components: {
        Mapa,
        EventBus
    },
    data() {
        return {
            // Dades del lloc
            pint: {
                nom: "",
                descr: "",
                id_usuari: 0,
                foto: null,
                lat: "",
                lng: ""
            },
            lastPintId: 0,
            // Opcions del input d'imatges
            dropzoneOptions: {
                // url on enviar l'arxiu, es indiferent ja que no fem servir la funcionalitat
                url: 'localhost',
                // Tipus d'arxiu acceptats, també es comprova al servidor
                acceptedFiles: "image/jpeg, image/png",
                // Nombre màxim d'arxius permesos
                maxFiles: 1,
                // Mida màxima en MB
                maxFilesize: 2.6,
                // No permetre pujar múltiples arxius
                uploadMultiple: false,
                // Estils per defecte
                includeStyling: true,
                // Eliminar arxius de la cua
                addRemoveLinks: true,
                // No processar arxius de forma automàtica
                autoProcessQueue: false,
                // Vista prèvia de les imatges
                previewsContainer: ".preview-container"
            },
            // Indicador per saber si hi ha imatges penjades
            hasFiles: false,
            error: {
                hasErrors: false,
                nom: false,
                coord: false,
                foto: false
            }
        }
    },
    methods: {
        goBack(){
            EventBus.$emit('goBack1' , 1);
        },
        async addPint() {
            // Nou objecte FormData per enviar només les dades
            var fd = new FormData();
            // Afegir els camps
            fd.append('nom', this.pint.nom);
            fd.append('descr', this.pint.descr);
            fd.append('lat', this.pint.lat);
            fd.append('lng', this.pint.lng);
            fd.append('id_usuari', this.pint.id_usuari);

            Axios.post("/api/pint/addPint.php", fd);
        addPint() {
            if (this.pint.nom == "") {
                this.error.nom = true;
                this.error.hasErrors = true;
            }
            if (this.pint.foto == null) {
                this.error.foto = true;
                this.error.hasErrors = true;
            }
            if (this.pint.lat == "" || this.pint.lng == "") {
                this.error.coord = true;
                this.error.hasErrors = true;
            }
            if (!this.error.hasErrors) {
                // Nou objecte FormData per enviar només les dades
                var fd = new FormData();
                // Afegir els camps
                fd.append('nom', this.pint.nom);
                fd.append('descr', this.pint.descr);
                fd.append('lat', this.pint.lat);
                fd.append('lng', this.pint.lng);
                fd.append('id_usuari', this.pint.id_usuari);

                Axios.post("/api/pint/addPint.php", fd);
            }
        },
        saveFoto() {
            // Nou objecte FormData per enviar la imatge
            var fd = new FormData();
            // Afegir l'id del pint
            fd.append('id_pint', this.lastPintId);
            // Afegir la imatge
            fd.append('image', this.pint.foto, this.pint.foto.name);

            Axios.post("/api/foto/save.php", fd);
        },
        // Últim id de pint creat per l'usuaris per poder guardar la foto
        getLastPintByUser() {
            Axios.get("/api/pint/getLastPintByUser.php", {
                params: {
                    id_usuari: this.pint.id_usuari
                }
            })
            .then(res => {
                this.lastPintId = res.data.id_pint;
                this.saveFoto();
            });
        },
        // Funció per processar el formulari
        handleForm() {
            this.addPint();
            this.getLastPintByUser();
            this.goBack();
            // Axios.get("http://daw.institutmontilivi.cat/hooktravel/api/pint/addPint.php", {
            //         params: {
            //             nom: this.pint.nom,
            //             descr: this.pint.descr,
            //             lat: this.pint.lat,
            //             lng: this.pint.lng,
            //             id_usuari: sessionStorage.getItem('user_id')
            //         }
            // .then(res => {
            //     console.log(res.data);
            // });
        },
        // Aquesta funció es crida quan es penja una imatge
        fileSelected(file) {
            // Eliminar elements innecessaris
            var dz = document.getElementById("pint-foto-dropzone");
            dz.firstChild.firstChild.lastChild.querySelector(".dz-progress").remove();

            // Recuperar la foto
            this.pint.foto = file;
            this.hasFiles = true;
        },
        // Quan s'elimina una imatge
        fileDeleted() {
            // Eliminar la foto
            this.pint.foto = null;
            if (this.$refs.pintFotoDropZone.getQueuedFiles().length == 0) this.hasFiles = false;
        },
        // Quan s'intenta sobrepassar el limit d'imatges
        fileRejected(file) {
            // Eliminar l'arxiu que s'intenta penjar
            this.$refs.pintFotoDropZone.removeFile(file);
        },
        getCords(cords) {
            this.pint.lat = cords.lat;
            this.pint.lng = cords.lng;
        }
    },
    mounted() {
        this.pint.id_usuari = sessionStorage.getItem('user_id');
        var inputWrapper = document.getElementsByClassName("input-wrapper");

        for (var i = 0; i < inputWrapper.length; i++) {
            var animationDelay;
            // Classes de CSS
            // # extend-left: Mou la barra vertical (span) del input cap a l'esquerra
            // # extend-right: Mou la barra vertical (span) del input cap a la dreta
            var span = inputWrapper[i].querySelector("span.input-bar");
            var input = inputWrapper[i].querySelector("input");
            if (input.getAttribute("type") == "text") {

                inputWrapper[i].addEventListener("mouseenter", function() {
                    // Treure la classe si existeix 
                    if (span.classList.contains("extend-left")) span.classList.remove("extend-left");
                    span.classList.add("extend-right");
                    input.style.color = "white";
                    // Passats 400 milisegons (el temps que duren les animacions) la barra vertical
                    // s'oculta i es canvia el color de l'input
                    animationDelay = setTimeout(() => {
                        span.style.zIndex = "-1";
                        input.style.backgroundColor = "#35495e";
                    }, 400);
                });

                inputWrapper[i].addEventListener("click", function () {
                    span.classList.remove("extend-right");
                });

                inputWrapper[i].addEventListener("mouseleave", function() {
                    clearTimeout(animationDelay);
                    if (span.classList.contains("extend-right")) span.classList.remove("extend-right");
                    span.classList
                    span.style.zIndex = "0";
                    input.style.backgroundColor = "#41b8838e";
                    span.classList.add("extend-left");
                    setTimeout(() => {
                        input.style.color = "black";
                    }, 200);
                });
            }
        }
    }
}

