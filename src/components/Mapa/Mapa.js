import { gmapApi } from 'vue2-google-maps';
import Axios from "axios"
import PintInfo from '../PintInfo/PintInfo.vue'
import EventBus from "../EventBus/EventBus.vue"
import Vue from 'vue'

export default {
  name: 'Mapa',
  components: {
    PintInfo,
    EventBus
  },
  props: {
    canClick: false
  },
  data() {
    return {
      showPint: false,
      names: "test",
      google: null,
      center: {},
      infoWindowPos: null,
          infoWinOpen: false,
          currentMidx: null,

          infoOptions: {
        	content: '',
            //optional: offset infowindow so it visually sits nicely on top of our marker
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
      markers: []
    }
  },
  methods: {

    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;

      }
    },

    geolocate() {
      navigator.geolocation.getCurrentPosition(currPosition => {
        this.center = {
          lat: currPosition.coords.latitude,
          lng: currPosition.coords.longitude
        };
      });
    },
    placeMarker(lat1, lng1) {
      this.markers = [];
      var position = {
        lat: lat1,
        lng: lng1
      };
      this.markers.push({
        position: position
      });
    },
    placeMarkers(lat1, lng1, idPint , nom , descr) {



      var position = {
        lat: lat1,
        lng: lng1
      };
      var info = `
      <pint-info></pint-info>
      <h1 class="pint_titol">${nom}</h1> 
      <hr>
      <p class="pint_descr">${descr}</p>
      `;

      this.markers.push({
        position: position,
        infoText: info
      });
    },
    getPints(){
      Axios.get("https://daw.institutmontilivi.cat/hooktravel/api/pint/getPints.php")
      .then(res => {
        const values = Object.values(res.data);
        for (let i = 0; i < values.length; i++) {
          this.placeMarkers(parseFloat( values[i].coordLat),parseFloat( values[i].coordLong),values[i].id_pint,values[i].nom,values[i].descr);
        }

      });
    }
  },
  mounted() {
    
    this.$refs.map.$mapPromise.then((map) => {
      this.google = gmapApi;
      this.geolocate();

      this.google().maps.event.addListener(map, 'click', (event) => {
        if (this.canClick) {
          this.placeMarker(event.latLng.lat(), event.latLng.lng());
          var position = this.markers[0].position;
          this.$emit("getCords", position);
        }

      });
    });
    if (!this.canClick){
    this.getPints();
    }
  }
}