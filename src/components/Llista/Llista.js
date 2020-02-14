import PintInfo from '../PintInfo/PintInfo.vue'
import EventBus from "../EventBus/EventBus.vue"

import Axios from "axios"

export default {
    name: 'Llista',
    components: {
        PintInfo,
        EventBus
    },
    data() {
        return {
           pints: {},
           pintBase: "https://daw.institutmontilivi.cat/hooktravel/uploads/fotos/pint/",
           showPint: false,
           selectedPint:0
        }
    },
    methods: {

        getPintsAndUsers(){
            Axios.get("https://daw.institutmontilivi.cat/hooktravel/api/pint/getPintsAndUsers.php")
            .then(res => { 
              console.log(res.data);
              
              this.pints = res.data;
      
            });
          },
          togglePint(pint){
              this.selectedPint= pint;
              this.showPint=true;
          }
    },
    mounted() {

        EventBus.$on('goBack', () =>{ 
            this.showPint = false;
        } )

        this.getPintsAndUsers();
    }
}

