import Axios from "axios"

export default {
    name: 'PintInfo',
    props:{
id_pint:0
    },
    data() {
        return {
           pint:{},
           pintBase: "http://daw.institutmontilivi.cat/hooktravel/uploads/fotos/pint/"
        }
    },
    methods: {
        getPintAndUser(){
            Axios.get("/api/pint/getPintAndUser.php?id_pint="+this.id_pint)
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

