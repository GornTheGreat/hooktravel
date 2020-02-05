<template>
    <div id="Llista">
        <div class="llista-wrapper">
            <div class="llista">
                <div class="llista-inner">
                    <div v-for="pint in pints" :key="pint">
                        <div class="lloc">
                            <div class="titol row">
                                <div class="col-6">

                                <h1>{{pint.nom}}</h1>
                                </div>
                                <div class="col-6 titol-rigth">

                                 <i>Penjat per {{pint.nom_usuari}}</i>
                                </div>

                            </div>
                            <hr>
                            <div class="descr">

                                <p>{{pint.descr}}</p>

                            </div>
                            <div class="hora">

                            <i>{{pint.dia_pujada}}</i>
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