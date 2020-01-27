import Mapa from '../Mapa/Mapa.vue'
import Perfil from '../Perfil/Perfil.vue'

export default {
    name: 'MainPage',
    components: {
        Mapa ,
        Perfil
    },
    data(){
        return {
            perfil: false
        }
    },
    methods: {
        switchPerfil(){
            this.perfil = !this.perfil;
        }
    }

}