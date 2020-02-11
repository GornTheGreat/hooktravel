import Mapa from '../Mapa/Mapa.vue'
import Perfil from '../Perfil/Perfil.vue'
import FormLloc from '../FormLloc/FormLloc.vue'
import Llista from '../Llista/Llista.vue'

export default {
    name: 'MainPage',
    components: {
        Mapa ,
        Perfil,
        FormLloc,
        Llista
    },
    data(){
        return {
            // Per mostrar o ocultar els components
            perfil: false,
            formlloc: false,
            Llista: false,
            Add: false,
            // Per aplicar atributs de forma dinàmica
            spinning: false,
            // Per habilitar el fons negre al obrir un popup / component
            darkOverlay: false
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
        switchPerfil(){
            if (this.formlloc) {
                this.darkOverlay = false;
                this.formlloc = !this.formlloc;
            }
            if (this.Llista) {
                this.darkOverlay = false;
                this.Llista = !this.Llista;
            }
            this.darkOverlay = !this.darkOverlay;
            this.perfil = !this.perfil;
            this.switchAdd();
        },
        switchFormLloc(){
            if (this.perfil) {
                this.darkOverlay = false;
                this.perfil = !this.perfil;
            }
            if (this.Llista) {
                this.darkOverlay = false;
                this.Llista = !this.Llista;
            }

            this.darkOverlay = !this.darkOverlay;
            this.formlloc = !this.formlloc;
        },
        showMap() {
            this.formlloc = false;
            this.perfil = false;
            this.Llista = false;
            this.darkOverlay = false;
            this.switchAdd();

        },
        switchLlista(){
            if (this.perfil) {
                this.darkOverlay = false;
                this.perfil = !this.perfil;
            }
            if (this.formlloc) {
                this.darkOverlay = false;
                this.formlloc = !this.formlloc;
            }
            this.darkOverlay = !this.darkOverlay;
            this.Llista = !this.Llista;
            this.switchAdd();
        }
    },
    beforeMount(){
        this.switchAdd();
    },
    beforeUpdate(){
        this.switchAdd();

    }


}