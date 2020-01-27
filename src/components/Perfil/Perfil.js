import Axios from "axios"

export default {
    name: 'Perfil',
    data() {
        return {
            user: {
                username: "",
                email: "",
                passwd: "",
                name: "",
                surname: ""
            }
        }
    },
    methods: {
        handleForm() {
            Axios.get("http://daw.institutmontilivi.cat/hooktravel/api/dev/usuari/create.php", {
                params: {
                    nom_usuari: this.user.username,
                    contrasenya: this.user.passwd,
                    correu: this.user.email,
                    nom: this.user.name,
                    cognom: this.user.surname
                }
            })
            .then(alert("Success"), alert("No sucess"))
        }
    },
    mounted() {
        var inputWrapper = document.getElementsByClassName("input-wrapper");
        var span = document.getElementsByClassName("input-bar");

        for (var i = 0; i < inputWrapper.length; i++) {
            inputWrapper[i].addEventListener("mouseenter", function() {
                    this.firstChild.classList.add("extend-to-right");
                    setTimeout(() => {
                        this.lastChild.classList.add("flip-bg-color");
                    }, 300);
                    setTimeout(() => {
                        this.firstChild.style.zIndex = -1;
                    }, 300);
                    
            });
            inputWrapper[i].addEventListener("mouseleave", function() {
                    this.firstChild.classList.remove("extend-to-right");
                    this.firstChild.classList.remove("swap-to-right");
                    this.firstChild.classList.add("extend-to-left");
                    setTimeout(() => {
                        this.firstChild.classList.add("swap-to-left");
                    }, 300);
                    setTimeout(() => {
                        this.firstChild.classList.remove("extend-to-left");
                    }, 300);
                    setTimeout(() => {
                        this.firstChild.classList.remove("swap-to-left");
                    }, 300);
            });
            inputWrapper[i].addEventListener("click", function() {
                    this.lastChild.classList.remove("flip-bg-color");
                    this.firstChild.style.zIndex = 0;
                    this.firstChild.classList.remove("extend-to-right");
                    this.firstChild.classList.add("swap-to-right");
            });
            
        }
    }
}

