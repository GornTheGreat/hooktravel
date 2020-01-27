<template>
    <div id="layout" class="container-fluid">
        <div class="row no-gutters">
            <div class="col-12">
                <mapa></mapa>
                <perfil v-if="perfil"></perfil>
                <formlloc v-if="formlloc"></formlloc>

            </div>
        </div>
        <div id="Btn_afegirLloc">

            <button @click="switchFormLloc()">+</button>
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
<style lang="scss" src="./MainPage.scss"></style>