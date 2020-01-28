import Axios from "axios"

export default {
    name: 'FormLloc',
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
            .then(alert("Success boii"), alert("No sucess boi"))
        }
    },
    mounted() {
        var inputWrapper = document.getElementsByClassName("input-wrapper");

        for (var i = 0; i < inputWrapper.length; i++) {
            inputWrapper[i].addEventListener("mouseenter", function() {
                if (this.firstChild.classList.contains("extend-left")) this.firstChild.classList.remove("extend-left");
                this.firstChild.classList.add("extend-right");
                if (this.lastChild == "input") this.lastChild.style.color = "white";
                setTimeout(() => {
                    this.firstChild.style.zIndex = "-1";
                    if (this.lastChild == "input") this.lastChild.style.backgroundColor = "#35495e";
                }, 400);
            });

            inputWrapper[i].addEventListener("click", function () {
                this.firstChild.classList.remove("extend-right");
            });

            inputWrapper[i].addEventListener("mouseleave", function() {
                if (this.firstChild.classList.contains("extend-right")) this.firstChild.classList.remove("extend-right");
                this.firstChild.classList
                this.firstChild.style.zIndex = "0";
                if (this.lastChild == "input") this.lastChild.style.backgroundColor = "#41b8838e";
                this.firstChild.classList.add("extend-left");
                setTimeout(() => {
                    if (this.lastChild == "input") this.lastChild.style.color = "black";
                }, 200);
            });
        }
    }
}

