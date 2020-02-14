import Axios from "axios"

export default {
    name: 'Llista',
    data() {
        return {
           pints:[]
        }
    },
    methods: {
        getPintsAndUsers(){
            Axios.get("https://daw.institutmontilivi.cat/hooktravel/api/pint/getPintsAndUsers.php")
            .then(res => { 
              console.log(res.data);
              this.pints = res.data;
      
            });
          }
    },
    mounted() {
        this.getPintsAndUsers();
    }
}

