import {gmapApi} from 'vue2-google-maps';
import Axios from "axios"

export default {
  name: 'Mapa',
  props: {
    canClick: false
  },
  data() {
    return {
      names: "test",
      google: null,
      center: {},
      markers: []
    }
  },
  methods: {
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
    placeMarkers(lat1, lng1) {
      var position = {
        lat: lat1,
        lng: lng1
      };
      this.markers.push({
        position: position
      });
    },
    selectPint(){
      Axios.get("http://daw.institutmontilivi.cat/hooktravel/api/pint/selectPint.php")
      .then(res => { 
        console.log(res.data);
        const values = Object.values(res.data);
        for (let i = 0; i < values.length; i++) {
          this.placeMarkers(parseFloat( values[i].coordLat),parseFloat( values[i].coordLong));
          //this.placeMarkers(41.24515151381+i,2+i);
        }
        console.log(this.markers);

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
    if (!this.canClick)
    this.selectPint();

  }
}