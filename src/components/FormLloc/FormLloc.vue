<template>
    <div id="formlloc">
        <div class="form-wrapper">
            <div class="form">
                <form @submit.prevent="handleForm()">
                    <div class="row">
                        <div class="col-12">
                            <label for="Nom">Nom del punt d'interés</label>
                            <div class="input-wrapper">
                                <span class="input-bar"></span>
                                <input type="text" id="nom" v-model="nom" autofocus>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="Descripció">Descripció</label>
                            <div class="input-wrapper">
                                <textarea id="descr" v-model="descr"></textarea>
                            </div>
                        </div>
                        <div class="col-12 col-md-8 col-lg-6">
                            <label for="foto">Foto principal</label>
                            <div class="input-wrapper">
                                <input type="file" id="pint-foto" name="pint-foto" @change="fileSelected">
                            </div>
                        </div>
                    </div>
                    <mapa :canClick="true" ></mapa>
                    <div class="btn-signin">
                        <button submit>
                            Afegir lloc
                            <font-awesome-icon :icon="['fas', 'plus-circle']"></font-awesome-icon>
                        </button>
                    </div>
                </form>
            </div>
        </div>  
    </div>   
</template>

<script src="./FormLloc.js"></script>
<style lang="scss" src="./FormLloc.scss" scoped></style>