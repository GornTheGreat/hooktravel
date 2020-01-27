import FormLloc from '../FormLloc/FormLloc.vue'
export default {
    name: 'Mapa',
    components: {
        FormLloc
    },
    data(
        ){
            return {
                formlloc: false
    
            }
        },
        methods: {
    
            
            switchFormLloc(){
                this.formlloc = !this.formlloc;
            }
        }
}