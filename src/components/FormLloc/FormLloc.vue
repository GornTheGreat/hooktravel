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
                                <input type="text" id="Nom" v-model="Nom" autofocus>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="Descripció">Descripció</label>
                            <div class="input-wrapper">
                                <span class="input-bar"></span>
                                <textarea id="Descripció" v-model="Descripció"></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="foto">Foto principal</label>
                            <div class="input-wrapper">
                                <span class="input-bar"></span>
                                <input type="file" id="foto">
                            </div>
                        </div>
                        
                    </div>
                    <div class="btn-signin">
                        <button submit>
                            Afegir lloc
                            <font-awesome-icon :icon="['fa', 'sign-in-alt']"></font-awesome-icon>
                        </button>
                    </div>
                </form>
            </div>
        </div>  
    </div>   
</template>

<script src="./FormLloc.js"></script>
<style lang="scss" src="./FormLloc.scss" scoped></style>