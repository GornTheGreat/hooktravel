export default {
  name: 'Mapa',
  data() {
    return {
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
    this.geolocate();
    
    document.getElementById('map').maps.event.addListener(map, 'click', function (event) {
      placeMarker(event.latLng);
    });
  }
}