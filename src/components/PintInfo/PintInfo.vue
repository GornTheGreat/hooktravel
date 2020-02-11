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

                                        <div class="col-12">

                                            <h1 :title="pint.nom" class="pintInfoTitol">{{pint.nom}}</h1>
                                            <!-- <h1>titol</h1> -->

                                        </div>

                                        <div class="col-12 titol-rigth">

                                            <i>Penjat per {{pint.nom_usuari}} el dia {{pint.dia_pujada}}</i>
                                            <!-- <i>Penjat per f el dia 3</i> -->

                                        </div>
                                        <hr>
                                        <div class="col-12 descr">

                                            <p>{{pint.descr}}</p>
                                            <!-- <p>dscr</p> -->

                                        </div>
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