import Axios from "axios"
import EventBus from "../EventBus/EventBus.vue"

export default {
    name: 'PintInfo',
    components:{
    EventBus
    },
    props:{
id_pint:0
    },
    data() {
        return {
           pint:{},
           pintBase: "https://daw.institutmontilivi.cat/hooktravel/uploads/fotos/pint/"
        }
    },
    methods: {
        goBack(){
            EventBus.$emit('goBack' , 1);
        },
        getPintAndUser(){
            Axios.get("https://daw.institutmontilivi.cat/hooktravel/api/pint/getPintAndUser.php?id_pint="+this.id_pint)
            .then(res => { 
              console.log(res.data);
              this.pint = res.data;
              
      
            });
          }
    },
    mounted() {
        this.getPintAndUser();
    }
}

