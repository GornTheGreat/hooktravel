import Axios from "axios"

export default {
    name: 'FormLloc',
    data() {
        return {
            pint: {
                nom: "",
                descr: "",
                foto: null
            },
        }
    },
    methods: {
        handleForm() {
            var fd = new FormData();  
            fd.append('image', this.pint.foto, this.pint.foto.name);

            Axios.post("http://daw.institutmontilivi.cat/hooktravel/api/dev/foto/save.php", {
                params: {
                    foto: fd
                }
            })
            .then(res => {
                console.log(res);
            });
        },
        fileSelected(event) {
            this.pint.foto = event.target.files[0];
            
        }
    },
    mounted() {
        var inputWrapper = document.getElementsByClassName("input-wrapper");

        for (var i = 0; i < inputWrapper.length; i++) {
            if (inputWrapper[i].lastChild.getAttribute("type") == "text") {
                inputWrapper[i].addEventListener("mouseenter", function() {
                    if (this.firstChild.classList.contains("extend-left")) this.firstChild.classList.remove("extend-left");
                    this.firstChild.classList.add("extend-right");
                    this.lastChild.style.color = "white";
                    setTimeout(() => {
                        this.firstChild.style.zIndex = "-1";
                        this.lastChild.style.backgroundColor = "#35495e";
                    }, 400);
                });

                inputWrapper[i].addEventListener("click", function () {
                    this.firstChild.classList.remove("extend-right");
                });

                inputWrapper[i].addEventListener("mouseleave", function() {
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
        }
    }
}

