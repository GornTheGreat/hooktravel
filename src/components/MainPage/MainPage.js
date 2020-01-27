import Mapa from '../Mapa/Mapa.vue'
import Perfil from '../Perfil/Perfil.vue'
import FormLloc from '../FormLloc/FormLloc.vue'

export default {
    name: 'MainPage',
    components: {
        Mapa ,
        Perfil,
        FormLloc
    },
    data(){
        return {
<<<<<<< HEAD
            perfil: false
=======
            perfil: false,
            formlloc: false

>>>>>>> origin/E2
        }
    },
    methods: {
        switchPerfil(){
            this.perfil = !this.perfil;
        },
        switchFormLloc(){
            this.formlloc = !this.formlloc;
        }
    }

}