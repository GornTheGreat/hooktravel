<template>
    <div id="perfil">
        <div class="form-wrapper">
            <div class="form">

                <div v-if="User">
                    <form class="scrollable" @submit.prevent="Logout()">
                        <div class="foto">
                            <div  class="foto-behind"></div>
                            <img @mouseenter="expandFoto" @mouseleave="shrinkFoto" id="profilePic" :src="user.foto">
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="username">Nom d'usuari</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="username" v-model="user.username" autofocus>
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="email">Adreça de correu</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="email" id="email" v-model="user.email">
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="passwd">Contrasenya</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="password" id="passwd" v-model="user.passwd">
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="name">Nom</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="name" v-model="user.name">
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="surname">Cognom</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="surname" v-model="user.surname">
                                </div>
                            </div>
                        </div>
                        <div class="btn-signin">
                            <button submit>
                                LogOut
                                <font-awesome-icon :icon="['fa', 'sign-in-alt']"></font-awesome-icon>
                            </button>
                            
                        </div>
                    </form>


                </div>

                <div v-if="Register">
                    <form class="scrollable" @submit.prevent="registerForm()">
                        
                        <div class="row">
                            <div class="col-12">
                                <label for="username">Nom d'usuari</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="username" v-model="user.username" autofocus>
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="email">Adreça de correu</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="email" id="email" v-model="user.email">
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="passwd">Contrasenya</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="password" id="passwd" v-model="user.passwd">
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="name">Nom</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="name" v-model="user.name">
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="surname">Cognom</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="surname" v-model="user.surname">
                                </div>
                            </div>
                        </div>
                        <div class="btn-signin">
                            <button submit>
                                Registrar-se
                                <font-awesome-icon :icon="['fa', 'sign-in-alt']"></font-awesome-icon>
                            </button>
                        </div>
                    </form>


                </div> 

                <div v-if="Logged">


                    <form @submit.prevent="loginForm()">
                        <div class="row">
                            <div class="col-12">
                                <label for="username">Nom d'usuari</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="username" v-model="user.username" autofocus>
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="passwd">Contrasenya</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="password" id="passwd" v-model="user.passwd">
                                </div>
                            </div>

                            <div class="btn-signin">
                                <button submit>
                                    Iniciar secció
                                    <font-awesome-icon :icon="['fa', 'sign-in-alt']"></font-awesome-icon>
                                </button>
                                <button @click="Registered()">
                                Register
                                <font-awesome-icon :icon="['fa', 'sign-in-alt']"></font-awesome-icon>
                            </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script src="./Perfil.js"></script>
<style lang="scss" src="./Perfil.scss" scoped></style>