<template>
    <div id="Llista">
        <div id="Llista2">
            <div class="llista-wrapper">
                <div class="llista">
                    <div class="llista-inner scrollable">
                        <div v-for="pint in pints" :key="pint.id_pint" @click="togglePint(pint.id_pint)">

                                <div class="lloc">
                            <div class="backG1"></div>
                            <div class="backG"></div>
                                    <div class="titol row">
                                        <div class="col-12 col-md-4">
                                            <img class="img-lloc" :src="pintBase + pint.nom_foto" alt="">
                                        </div>

                                        <div class="col-12 col-md-8">
                                            <div class="row pad-10">

                                                <div class="col-12 col-md-6 titolLloc">

                                                    <h1 :title="pint.nom">{{pint.nom}}</h1>

                                                </div>
                                                <div class="col-12 col-md-6 titol-rigth credits">

                                                    <i>Penjat per {{pint.nom_usuari}} el dia {{pint.dia_pujada}}</i>

                                                </div>

                                                <hr>
                                                <div class="col-12 descr">

                                                    <p>{{pint.descr}}</p>

                                                </div>
                                            </div>

                                        </div>

                                    </div>



                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition name="drop-top">
            <pint-info :id_pint="selectedPint" v-if="showPint"></pint-info>
        </transition>
    </div>
</template>

<script src="./Llista.js"></script>
<style lang="scss" src="./Llista.scss" scoped></style>