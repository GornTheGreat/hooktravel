<template>
    <div id="formlloc">
        <div class="form-wrapper">
            <div class="form col-12 col-sm-10 col-md-8">
                <form class="scrollable" @submit.prevent="handleForm()">
                    <div class="row">
                        <div class="col-12">
                            <label for="Nom">Nom del punt d'interés</label>
                            <div class="input-wrapper">
                                <span class="input-bar"></span>
                                <input type="text" id="nom" v-model="pint.nom" autofocus>
                            </div>
                            <error v-if="error.nom">Has d'introduïr un nom!</error>
                        </div>
                        <div class="col-12">
                            <label for="Descripció">Descripció</label>
                            <div class="textarea-wrapper">
                                <textarea class="tecstarea" id="descr" v-model="pint.descr"></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="foto">Foto principal</label>
                            <vue-dropzone class="col-12"
                                ref="pintFotoDropZone"
                                id="pint-foto-dropzone"
                                :useCustomSlot="true"
                                :options="dropzoneOptions"
                                @vdropzone-file-added="fileSelected"
                                @vdropzone-removed-file="fileDeleted"
                                @vdropzone-max-files-exceeded="fileRejected"
                            >
                                <div class="preview-container">
                                    <div v-if="hasFiles" class="dz-preview">
                                        <div class="dz-details">
                                            <div class="dz-filename"><span data-dz-name></span></div>
                                            <div class="dz-size" data-dz-size></div>
                                            <img data-dz-thumbnail />
                                        </div>
                                        <div class="dz-success-mark"><span>✔</span></div>
                                        <div class="dz-error-mark"><span>✘</span></div>
                                        <div class="dz-error-message"><span data-dz-errormessage></span></div>
                                    </div>
                                </div>
                                <font-awesome-icon class="upload" v-if="!hasFiles" :icon="['fas', 'upload']" size="3x"></font-awesome-icon>
                            </vue-dropzone>
                            <error v-if="error.foto">Has de penjar una foto!</error>
                        </div>
                    </div>
                    <mapa @getCords="getCords" :canClick="true"></mapa>
                    <error v-if="error.coord">Has d'escollir una ubicació!</error>
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