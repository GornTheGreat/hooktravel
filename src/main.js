import Vue from 'vue'
import App from './App.vue'
// Importar Axios
import './plugins/axios'
// Importar Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Importar icones de Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignInAlt, faPlus, faIdBadge, faMapMarkedAlt, faListUl, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
// Importar Google Maps
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false
// Utilitzar Bootstrap
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Utilitzar Fontawesome
library.add(faSignInAlt, faPlus, faIdBadge, faMapMarkedAlt, faListUl, faPlusCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
// Utilitzar Google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDAs6i1mssHmgMuKSeGkjqZa-N3nYYSnrY',
    libraries: 'places'
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
