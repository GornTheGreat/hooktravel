import Axios from "axios"
import MD5 from "md5"

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
        registerForm() {
            Axios.get("http://daw.institutmontilivi.cat/hooktravel/api/usuari/create.php", {
                params: {
                    nom_usuari: this.user.username,
                    contrasenya: MD5(this.user.passwd),
                    correu: this.user.email,
                    nom: this.user.name,
                    cognom: this.user.surname
                }
            })
        },
        loginForm() {
            Axios.get("http://daw.institutmontilivi.cat/hooktravel/api/usuari/login.php", {
                params: {
                    nom_usuari: this.user.username,
                    contrasenya: MD5(this.user.passwd)
                }
            }).then( res => {
console.log(res.data);
                if(res.data[0] == "OK"){

                    sessionStorage.setItem('user_id', res.data[1]);

                }
            }

            )
        }
    },
    mounted() {
        var inputWrapper = document.getElementsByClassName("input-wrapper");

        for (var i = 0; i < inputWrapper.length; i++) {
            var animationDelay;
            inputWrapper[i].addEventListener("mouseenter", function() {  
                console.log("entra");     
                if (this.firstChild.classList.contains("extend-left")) this.firstChild.classList.remove("extend-left");
                this.firstChild.classList.add("extend-right");
                this.lastChild.style.color = "white";
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
                console.log("surt");
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


        var profilePic = document.getElementById("profilePic");
        var ads = document.getElementsByClassName("foto")[0];
        var fotoCoverExpand = document.getElementsByClassName("foto-behind")[0];

        ads.addEventListener("mouseenter", () => {
            console.log("aaaaa");
            fotoCoverExpand.style.width = "115%";
            fotoCoverExpand.style.height = "115%";
            fotoCoverExpand.style.background = "linear-gradient(to left top, #1CB5E0 0%, #000851 100%)";
        });

        profilePic.addEventListener("mouseleave", () => {
            fotoCoverExpand.style.width = "104%";
            fotoCoverExpand.style.height = "104%";
            fotoCoverExpand.style.background = "linear-gradient(to right bottom, #1CB5E0 0%, #000851 100%)";
        });
    }
}

