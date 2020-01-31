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
        // var position = {
        //   lat: currPosition.coords.latitude,
        //   lng: currPosition.coords.longitude
        // }
        // this.markers.push(position);
      });
    }
  },
  mounted() {
    this.$refs.map.$mapPromise.then((map) => {
      console.log(map);
      this.google = gmapApi;
      console.log(this.google());
      this.geolocate();
  
      // if (this.googleMapsInit) console.log(this.google);
      this.google.maps.event.addListener(map, 'click', function (event) {
        console.log(event);
        placeMarker(event.latLng);
      });
    });
  }
}