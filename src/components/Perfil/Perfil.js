import Axios from "axios"
import MD5 from "md5"

export default {
    name: 'Perfil',
    data() {
        return {
            profileImagePath: "http://daw.institutmontilivi.cat/hooktravel/uploads/fotos/usuaris/",
            profileImagePathRemote: "http://daw.institutmontilivi.cat:8050/hooktravel/uploads/fotos/usuaris/",
            Logged: true,
            Register: false,
            User: false,
            user: {
                nom_usuari: "",
                correu: "",
                passwd: "",
                nom: "",
                cognom: "",
                foto: null
            },
            fotoPerfil: null
        }
    },
    methods: {
        Registered() {
            this.Register = true;
            this.Logged = false;
            this.User = false;
        },
        Logout() {
            sessionStorage.setItem('user_id', "");
            this.User = false;
            this.Logged = true;
            this.Register = false;
        },
        checkIfUserLogged() {
            if (sessionStorage.getItem('user_id') != "" && sessionStorage.getItem('user_id') !== null){
                this.User = true;
                this.Logged = false;
                this.Register = false;

                this.readUser();
            }
        },
        registerForm() {
            Axios.get("/api/usuari/create.php", {
                params: {
                    nom_usuari: this.user.nom_usuari,
                    contrasenya: MD5(this.user.passwd),
                    correu: this.user.correu,
                    nom: this.user.nom,
                    cognom: this.user.cognom
                }
            })
        },
        loginForm() {
            Axios.get("/api/usuari/login.php", {
                params: {
                    nom_usuari: this.user.username,
                    contrasenya: MD5(this.user.passwd)
                }
            }).then(res => {
                if(res.data[0] == "OK"){

                    sessionStorage.setItem('user_id', res.data[1]);
                    this.Logged = true;
                    this.checkIfUserLogged();

                }
            });
        },
        readUser() {
            Axios.get("/api/usuari/read.php", {
                params: {
                    id_usuari: sessionStorage.getItem('user_id')
                }
            })
            .then(res => {
                var dades_usuari = res.data;
                this.user.nom_usuari = dades_usuari.nom_usuari;
                this.user.correu = dades_usuari.correu;
                this.user.nom = dades_usuari.nom;
                this.user.cognom = dades_usuari.cognom;
                this.user.descripcio = dades_usuari.descripcio;
                this.user.foto = dades_usuari.foto;
            });
        },
        // Funcions per l'efecte visual al canvi de foto de perfil
        expandFoto(event) {
            // Obtenir el div que hi ha darrera de la imatge de perfil
            var fotoCoverExpand = event.target.parentNode.firstChild;
            fotoCoverExpand.style.width = "120%";
            fotoCoverExpand.style.height = "120%";
            fotoCoverExpand.style.transform = "translate(-50%, -50%) rotate(180deg)";
        },
        shrinkFoto(event) {
            var fotoCoverExpand = event.target.parentNode.firstChild;
            fotoCoverExpand.style.width = "108%";
            fotoCoverExpand.style.height = "108%";
            fotoCoverExpand.style.transform = "translate(-50%, -50%) rotate(0deg)";
        },
        updateFoto() {
            this.$refs.updateImgInput.click();
        },
        fileSelected(file) {
            // Recuperar la foto
            this.user.foto = file;
        }
    },
    beforeUpdate() {
        this.fotoPerfil = this.user.foto != null ? this.profileImagePath + this.user.foto : this.profileImagePath + "profile-default.png";
    },
    mounted() {
        // Assignar a l'usuari la seva foto de perfil o una per defecte en funció de si ha seleccionat una
        this.user.foto = this.profileFoto ? this.profileImagePathRemote + 'image' : this.profileImagePathRemote + "profile-default.png";
        // ??
        this.checkIfUserLogged();
    

        // ###################################################################################
        // ############### MANIPULACIÓ DEL DOM PER AFEGIR ESTILS I TRANSICIONS ###############
        // ###################################################################################

        // Efectes dels inputs als formularis 
        var inputWrapper = document.getElementsByClassName("input-wrapper");
        
        for (var i = 0; i < inputWrapper.length; i++) {
            var animationDelay;
            // Classes de CSS
            // # extend-left: Mou la barra vertical (span) del input cap a l'esquerra
            // # extend-right: Mou la barra vertical (span) del input cap a la dreta
            inputWrapper[i].addEventListener("mouseenter", function() {
                // Treure la classe si existeix 
                if (this.firstChild.classList.contains("extend-left")) this.firstChild.classList.remove("extend-left");
                this.firstChild.classList.add("extend-right");
                this.lastChild.style.color = "white";
                // Passats 400 milisegons (el temps que duren les animacions) la barra vertical
                // s'oculta i es canvia el color de l'input
                animationDelay = setTimeout(() => {
                    this.firstChild.style.zIndex = "-1";
                    this.lastChild.style.backgroundColor = "#35495e";
                }, 400);
            });

            inputWrapper[i].addEventListener("click", function () {
                this.firstChild.classList.remove("extend-right");
            });

            inputWrapper[i].addEventListener("mouseleave", function() {
                clearTimeout(animationDelay);
                if (this.firstChild.classList.contains("extend-right")) this.firstChild.classList.remove("extend-right");
                this.firstChild.classList
                this.firstChild.style.zIndex = "0";
                this.lastChild.style.backgroundColor = "#41b8838e";
                this.firstChild.classList.add("extend-left");
                setTimeout(() => {
                    this.lastChild.style.color = "black";
                }, 200);
            });
        }

        // #############################################################
        // NO FUNCIONA, NO TROBA ELS ELEMENTS 

        // var divFoto = document.getElementsByClassName("foto")[0];
        // var profilePic = document.getElementById("profilePic");
        // var fotoCoverExpand = document.getElementsByClassName("foto-behind")[0];

        // profilePic.addEventListener("mouseenter", () => {
        //     fotoCoverExpand.style.width = "115%";
        //     fotoCoverExpand.style.height = "115%";
        //     fotoCoverExpand.style.background = "linear-gradient(to left top, #1CB5E0 0%, #000851 100%)";
        // });
       
        // profilePic.addEventListener("mouseleave", () => {
        //     fotoCoverExpand.style.width = "104%";
        //     fotoCoverExpand.style.height = "104%";
        //     fotoCoverExpand.style.background = "linear-gradient(to right bottom, #1CB5E0 0%, #000851 100%)";
        // });
        
    }
}

