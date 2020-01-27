<template>
    <div id="main-page" class="container-fluid">
        <div id="Btn_afegirLloc">
            <button @click="switchFormLloc()">+</button>
        </div>
        <div class="row no-gutters">
            <div class="col-12">
                <div class="content">
                    <mapa v-bind:class="{'popup-overlay': perfil}"></mapa>
                    <transition name="slide-up">
                        <perfil v-if="perfil"></perfil>
                    </transition>
                    <form-lloc v-if="formlloc"></form-lloc>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="row">
                <div class="col-4">
                    <button>Llista</button>
                </div>
                <div class="col-4">
                    <button>Mapa</button>
                </div>
                <div class="col-4">
                    <button @click="switchPerfil()">Perfil</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./MainPage.js"></script>
<style lang="scss" src="./MainPage.scss" scoped></style>