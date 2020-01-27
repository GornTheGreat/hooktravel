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
        var span = document.getElementsByClassName("input-bar");

        // for (var i = 0; i < span.length; i++) {
        //     span[i].addEventListener("mouseover", function() {
        //         this.classList.add("extend-to-right");
        //     });
        //     span[i].addEventListener("click", function() {
        //         this.classList.add("swap-to-right");
        //         this.classList.remove("extend-to-right")
        //     });
        // }

        var state = ""
        for (var i = 0; i < inputWrapper.length; i++) {
            inputWrapper[i].addEventListener("mouseenter", function() {

                this.firstChild.classList.add("extend-to-right");
            });
            inputWrapper[i].addEventListener("mouseleave", function() {
                this.firstChild.classList.remove("extend-to-right");
                this.firstChild.classList.remove("swap-to-right");
                this.firstChild.classList.add("swap-to-right");
            });
            inputWrapper[i].addEventListener("click", function() {
                this.firstChild.classList.remove("extend-to-right");
                this.firstChild.classList.add("swap-to-right");
            });
            
        }
    }
}

