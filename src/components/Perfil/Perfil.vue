<template>
    <div id="perfil">
        <div class="form-wrapper">
            <div class="form">

                <div v-if="User" class="type-wrapper">
                    <form class="scrollable" @submit.prevent="handleForm()">
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


                </div>

                <div v-if="Register">
                    <form class="scrollable" @submit.prevent="registerForm()">
                        
                        <div class="row norow">
                            <div class="col-12 center">
                                <h1>   Registrar-se </h1>
                            </div>
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
                                <label for="contrasenya">Contrasenya</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="password" id="contrasenya" v-model="user.contrasenya">
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


                    <form class="scrollable" @submit.prevent="loginForm()">
                        <div class="row norow">
                            <div class="col-12 center">
                                <h1>   Iniciar Sessió </h1>
                            </div>
                            <div class="col-12">
                                <label for="username">Nom d'usuari</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="text" id="username" v-model="user.username" autofocus>
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="contrasenya">Contrasenya</label>
                                <div class="input-wrapper">
                                    <span class="input-bar"></span>
                                    <input type="password" id="contrasenya" v-model="user.contrasenya">
                                </div>
                            </div>

                            <div class="btn-signin">
                                <button submit>
                                    Iniciar Sessió
                                    <font-awesome-icon :icon="['fa', 'sign-in-alt']"></font-awesome-icon>
                                </button>
                                <button @click="Registered()">
                                Registrar-se
                                <font-awesome-icon :icon="['fa', 'user-plus']"></font-awesome-icon>
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