import PintInfo from '../PintInfo/PintInfo.vue'
import Axios from "axios"

export default {
    name: 'Llista',
    components: {
        PintInfo
    },
    data() {
        return {
           pints:[],
           pintBase: "http://daw.institutmontilivi.cat/hooktravel/uploads/fotos/pint/",
           showPint: false,
           selectedPint:0
        }
    },
    methods: {
        getPintsAndUsers(){
            Axios.get("/api/pint/getPintsAndUsers.php")
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
        this.getPintsAndUsers();
    }
}

