<template>
    <div id="main-page" class="container-fluid">
        <div id="btn-afegir-lloc" v-bind:style="[perfil ? {'z-index': 0} : {'z-index': 1}]">
            <button @click="switchFormLloc()" @mouseenter="spinning = true" @mouseleave="spinning = false">
                <font-awesome-icon :icon="['fas', 'plus']" :style="{ color: '#35495e' }" :spin="spinning"></font-awesome-icon>
            </button>
        </div>
        <div class="row no-gutters">
            <div class="col-12">
                <div class="content">
                    <mapa v-bind:class="{'popup-overlay': darkOverlay}"></mapa>
                    <transition name="slide-up">
                        <perfil v-if="perfil"></perfil>
                    </transition>
                    <transition name="slide-left">
                        <form-lloc v-if="formlloc"></form-lloc>
                    </transition>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="row">
                <div class="col-4">
                    <button>
                        <font-awesome-icon :icon="['fas', 'list-ul']" :style="{ color: '#27313b' }"></font-awesome-icon>
                        Llista
                    </button>
                </div>
                <div class="col-4">
                    <button>
                        <font-awesome-icon :icon="['fas', 'map-marked-alt']" :style="{ color: '#27313b' }"></font-awesome-icon>
                        Mapa
                    </button>
                </div>
                <div class="col-4">
                    <button @click="switchPerfil()">
                        <font-awesome-icon :icon="['fas', 'id-badge']" :style="{ color: '#27313b' }"></font-awesome-icon>
                        Perfil
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./MainPage.js"></script>
<style lang="scss" src="./MainPage.scss" scoped></style>