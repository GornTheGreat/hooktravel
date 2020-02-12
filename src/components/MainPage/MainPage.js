import Mapa from '../Mapa/Mapa.vue'
import Perfil from '../Perfil/Perfil.vue'
import FormLloc from '../FormLloc/FormLloc.vue'
import Llista from '../Llista/Llista.vue'
import PintInfo from '../PintInfo/PintInfo.vue'
import EventBus from "../EventBus/EventBus.vue"


export default {
    name: 'MainPage',
    components: {
        Mapa ,
        Perfil,
        FormLloc,
        Llista,
        PintInfo,
        EventBus
    },
    data(){
        return {
            // Per mostrar o ocultar els components
            perfil: false,
            formlloc: false,
            llista: false,
            Add: false,
            showPint: false,
            // Per aplicar atributs de forma dinàmica
            spinning: false,
            // Per habilitar el fons negre al obrir un popup / component
            darkOverlay: false,
            selectedPint:0
        }
    },
    methods: {
        switchAdd(){
            if (sessionStorage.getItem('user_id') != "" && sessionStorage.getItem('user_id') !== null){

                this.Add = true;
            }else{
                this.Add = false;
            }
        },
        togglePint(pint){
            this.selectedPint= pint;
            this.showPint=true;
        },
        switchPerfil(){
            if (this.formlloc) {
                this.darkOverlay = false;
                this.showPint = false;
                this.formlloc = !this.formlloc;
            }
            if (this.llista) {
                this.darkOverlay = false;
                this.showPint = false;

                this.llista = !this.llista;
            }
            this.showPint = false;

            this.darkOverlay = !this.darkOverlay;
            this.perfil = !this.perfil;
            this.switchAdd();
        },
        switchFormLloc(){
            if (this.perfil) {
                this.showPint = false;

                this.darkOverlay = false;
                this.perfil = !this.perfil;
            }
            if (this.Llista) {
                this.showPint = false;

                this.darkOverlay = false;
                this.llista = !this.llista;
            }
            this.showPint = false;

            this.darkOverlay = !this.darkOverlay;
            this.formlloc = !this.formlloc;
        },
        showMap() {
            this.showPint = false;

            this.formlloc = false;
            this.perfil = false;
            this.llista = false;
            this.darkOverlay = false;
            this.switchAdd();

        },
        switchLlista(){
            if (this.perfil) {
                this.showPint = false;

                this.darkOverlay = false;
                this.perfil = !this.perfil;
            }
            if (this.formlloc) {
                this.showPint = false;

                this.darkOverlay = false;
                this.formlloc = !this.formlloc;
            }
            this.showPint = false;

            this.darkOverlay = !this.darkOverlay;
            this.llista = !this.llista;
            this.switchAdd();
        }
    },
    beforeMount(){
        this.switchAdd();
    },
    beforeUpdate(){
        this.switchAdd();

    },
    mounted(){
        EventBus.$on('goBack1', () =>{ 
            this.formlloc = false;
            this.darkOverlay = !this.darkOverlay;
        } )
    }


}