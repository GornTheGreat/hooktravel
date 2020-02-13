<template>
    <div id="main-page" class="container-fluid">
        <div id="btn-afegir-lloc" v-if="Add">
            <button @click="switchFormLloc()" @mouseenter="spinning = true" @mouseleave="spinning = false">
                <font-awesome-icon :icon="['fas', 'plus']" :style="{ color: '#35495e' }" :spin="spinning">
                </font-awesome-icon>
            </button>
        </div>
        <div class="row no-gutters">
            <div class="col-12">
                <div class="content">
                    <mapa :key="reload" v-bind:class="{'popup-overlay': darkOverlay}"></mapa>
                    <transition name="slide-left">
                        <llista v-if="llista"></llista>
                    </transition>

                    <transition name="drop-down">
                        <form-lloc v-if="formlloc"></form-lloc>
                    </transition>

                      <transition name="slide-rigth">
                        <perfil v-if="perfil"></perfil>
                    </transition>
                
                    <transition name="drop-top">
                        <pint-info :id_pint="selectedPint" v-if="showPint"></pint-info>
                    </transition>

                </div>
            </div>
        </div>
        <div class="footer">
            <div class="row">
                <div class="col-4">
                    <button @click="switchLlista()">
                        <font-awesome-icon :icon="['fas', 'list-ul']"></font-awesome-icon>
                        Llista
                    </button>
                </div>
                <div class="col-4">
                    <button @click="showMap()">
                        <font-awesome-icon :icon="['fas', 'map-marked-alt']"></font-awesome-icon>
                        Mapa
                    </button>
                </div>
                <div class="col-4">
                    <button @click="switchPerfil()">
                        <font-awesome-icon :icon="['fas', 'id-badge']"></font-awesome-icon>
                        Perfil
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./MainPage.js"></script>
<style lang="scss" src="./MainPage.scss" scoped></style>