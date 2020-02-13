<template>
    <div id="Llista">
        <div class="llista-wrapper">
            <div class="llista">
                <div class="llista-inner scrollable">
                    <div class="row">
                        <div class="backG1"></div>
                        <div class="backG"></div>
                        <div class="col-12">
                            <img class="img-lloc" :src="pintBase + pint.nom_foto" alt="">
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 center">
                                    <h1 :title="pint.nom" class="pintInfoTitol">{{pint.nom}}</h1>
                                </div>
                                <div class="col-12 titol-rigth">
                                    <i>Penjat per {{pint.nom_usuari}} el dia {{pint.dia_pujada | date}}</i>
                                </div>
                                <hr>
                                <div class=" descr">
                                    <p>{{pint.descr}}</p>
                                </div>
                            </div>
                            <div class="center">
                        <button @click="goBack()" class="btnBack">Tornar a la llista</button>
                    </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./PintInfo.js"></script>
<style lang="scss" src="./PintInfo.scss" scoped></style>