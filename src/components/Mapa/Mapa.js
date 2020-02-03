import { gmapApi } from 'vue2-google-maps';

export default {
  name: 'Mapa',
  data() {
    return {
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
      this.markers.push({position: position});
    }
  },
  mounted() {
    this.$refs.map.$mapPromise.then((map) => {
      this.google = gmapApi;
      this.geolocate();
  
      this.google().maps.event.addListener(map, 'click', (event) => {
        this.$emit("passData", "ok");
        this.placeMarker(event.latLng.lat(), event.latLng.lng());
      });
    });
  }
}