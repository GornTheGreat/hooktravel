import {
  gmapApi
} from 'vue2-google-maps';

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
  }
}