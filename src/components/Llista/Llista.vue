<template>
    <div id="Llista">
        <div class="llista-wrapper">
            <div class="llista">
                <div class="llista-inner scrollable">
                    <div v-for="pint in pints" :key="pint">
                        <div class="lloc">
                            <div class="titol row">
                                <div class="col-12 col-md-4">
                                    <img class="img-lloc" src="https://pbs.twimg.com/media/BPVGP4WCQAAJbvg.jpg" alt="">
                                </div>

                                <div class="col-12 col-md-8">
                                    <div class="row">

                                        <div class="col-6">

                                            <h1>{{pint.nom}}</h1>

                                        </div>

                                        <div class="col-6 titol-rigth">

                                            <i>Penjat per {{pint.nom_usuari}} el dia {{pint.dia_pujada}}</i>

                                        </div>
                                        <hr>
                                        <div class="col-12 descr">

                                            <p>{{pint.descr}}</p>

                                        </div>
                                    </div>

                                </div>

                            </div>

                            
                            <div class="hora">
                                {{pint.id_pint}}
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Llista.js"></script>
<style lang="scss" src="./Llista.scss" scoped></style>