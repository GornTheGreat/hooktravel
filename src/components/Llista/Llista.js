import Axios from "axios"

export default {
    name: 'Llista',
    data() {
        return {
            pints: []
        }
    },
    methods: {
        alert2(a) {
            this.$emit("PintId", a);
        },
        selectPints() {
            Axios.get("http://daw.institutmontilivi.cat/hooktravel/api/pint/selectPints.php")
                .then(res => {
                    console.log(res.data);
                    this.pints = res.data;

                });
        }
    },
    mounted() {
        this.selectPints();
    }
}