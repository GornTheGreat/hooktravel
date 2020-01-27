import Axios from "axios";
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
    name: 'Mapa',
    components: {
        
    },
    data(
        ){
            return {
                markers: [{
                    position: {
                      lat: 10.0,
                      lng: 10.0
                    }
                  }, {
                    position: {
                      lat: 11.0,
                      lng: 11.0
                    }
                  }]
                

    
            }
        },
        methods: {
             initMap() {
                // The location of Uluru
                var uluru = {lat: -25.344, lng: 131.036};
                // The map, centered at Uluru
                var map = new google.maps.Map(
                    document.getElementById('map'), {zoom: 4, center: uluru});
                // The marker, positioned at Uluru
                var marker = new google.maps.Marker({position: uluru, map: map});
              },
              placeMarker(location) {
                var marker = new google.maps.Marker({
                    position: location, 
                    map: map
                });
            },
            
            switchFormLloc(){
                this.formlloc = !this.formlloc;
            }
        },
        mounted(){
            document.getElementById('map').maps.event.addListener(map, 'click', function(event) {
                placeMarker(event.latLng);
             });
        }
}


 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDAs6i1mssHmgMuKSeGkjqZa-N3nYYSnrY',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})