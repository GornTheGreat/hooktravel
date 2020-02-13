<template>
    <div id="perfil">
        <div class="form-wrapper">
            <div class="form">

                <!-- <div v-if="perfil" class="type-wrapper"> -->
                    <form v-if="perfil" class="scrollable" @submit.prevent="handleForm()">
                        <div class="foto">
                            <div  class="foto-behind"></div>
                            <img @mouseenter="expandFoto" @mouseleave="shrinkFoto" @click="updateFoto" id="profilePic" :src="fotoPerfil">
                            <input ref="updateImgInput" style="display: none" @change="fileSelected" type="file">
                        </div>
                        <div class="row">
                            <div class="col-12 disabled">
                                <label for="username">Nom d'usuari</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="username" v-model="user.nom_usuari" autofocus disabled>
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="email">Adreça de correu</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="email" id="email" v-model="user.correu">
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="contrasenya">Contrasenya</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="password" id="contrasenya" v-model="user.contrasenya">
                                </div>
                            </div>
                            <div class="col-12 disabled">
                                <label for="name">Nom</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="name" v-model="user.nom" disabled>
                                </div>
                            </div>
                            <div class="col-12 disabled">
                                <label for="surname">Cognom</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="surname" v-model="user.cognom" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="btn-signin">
                            <button submit @click="action.logout = true">
                                Desconectar-se
                                <font-awesome-icon :icon="['fas', 'sign-in-alt']"></font-awesome-icon>
                            </button>
                        </div>
                        <div class="btn-signin">
                            <button submit @click="action.update = true" style="margin: 5px 0px 10px 0px">
                                Actualitzar dades
                                <font-awesome-icon :icon="['fas', 'save']"></font-awesome-icon>
                            </button>
                        </div>
                    </form>
                <!-- </div> -->

                </div>

                <!-- <div > -->
                    <form v-if="Register" class="scrollable" @submit.prevent="registerForm()">
                        
                        <div class="row norow">
                            <div class="col-12 center">
                                <h1>   Registrar-se </h1>
                            </div>
                            <div class="col-12">
                                <label for="username">Nom d'usuari *</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="username" v-model="user.nom_usuari" autofocus>
                                </div>
                                <error v-if="error.nom_usuari">Has d'introduïr un nom d'usuari!</error>
                            </div>
                            <div class="col-12">
                                <label for="email">Adreça de correu *</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="email" id="email" v-model="user.correu">
                                </div>
                                <error v-if="error.correu">Has d'introduïr una adreça de correu!</error>
                            </div>
                            <div class="col-12">
                                <label for="contrasenya">Contrasenya *</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="password" id="contrasenya" v-model="user.contrasenya">
                                </div>
                                <error v-if="error.contrasenya">Has d'introduïr una contrasenya!</error>
                            </div>
                            <div class="col-12">
                                <label for="name">Nom *</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="name" v-model="user.nom">
                                </div>
                                <error v-if="error.nom">Has d'introduïr el teu nom!</error>
                            </div>
                            <div class="col-12">
                                <label for="surname">Cognom *</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="surname" v-model="user.cognom">
                                </div>
                                <error v-if="error.cognom">Has d'introduïr el teu cognom!</error>
                            </div>
                        </div>
                        <div class="btn-signin">
                            <button submit style="margin-bottom: 10px">
                                Registrar-se
                                <font-awesome-icon :icon="['fa', 'sign-in-alt']"></font-awesome-icon>
                            </button>
                        </div>
                    </form>


                <!-- </div>  -->

                <!-- <div v-if="Logged"> -->
                    <form v-if="Logged" class="scrollable" @submit.prevent="loginForm()">
                        <div class="row norow">
                            <div class="col-12">
                                <label for="username">Nom d'usuari</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="username" v-model="user.nom_usuari" autofocus>
                                </div>
                                <error v-if="error.nom_usuari">Has d'introduïr un nom d'usuari!</error>
                            </div>
                            <div class="col-12">
                                <label for="contrasenya">Contrasenya</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="password" id="contrasenya" v-model="user.contrasenya">
                                </div>
                                <error v-if="error.contrasenya">Has d'introduïr la teva contrasenya!</error>
                            </div>
                        </div>

                        <div class="btn-signin">
                            <button submit>
                                Iniciar Sessió
                                <font-awesome-icon :icon="['fa', 'sign-in-alt']"></font-awesome-icon>
                            </button>
                        </div>
                            <div class="btn-signin">
                            <button @click="SignUp()" style="margin: 5px 0px 10px 0px">
                                Registrar-se
                                <font-awesome-icon :icon="['fa', 'user-plus']"></font-awesome-icon>
                            </button>
                        </div>
                    </form>
                <!-- </div> -->

            </div>
        </div>
    </div>
</template>

<script src="./Perfil.js"></script>
<style lang="scss" src="./Perfil.scss" scoped></style>