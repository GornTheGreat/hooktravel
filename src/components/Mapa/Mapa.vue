<template>


     <div id="map">

<GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="roadmap"
  style="width: 100%; height: 100%"
  
  :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: true,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   disableDefaultUi: false
 }"
 
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
    
  />
</GmapMap>

     </div>


</template>


    <!--Load the API from the specified URL
    * The async attribute allows the browser to render the page while the API loads
    * The key parameter will contain your own API key (which is not needed for this tutorial)
    * The callback parameter executes the initMap() function
    -->
    

<script src="./Mapa.js"></script>
<style lang="scss" src="./Mapa.scss" scoped></style>