<template>


  <div id="map">
    <gmap-map ref="map"
      :center="center" 
      :zoom="13.5" 
      map-type-id="hybrid" 
      style="width: 100%; height: 100%" 
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: true,
        gestureHandling: 'cooperative'
        
      }">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      </gmap-info-window>
      <gmap-marker
      class="selec"
        :key="index" 
        v-for="(m, index) in markers" 
        :position="m.position" 
        :clickable="true" 
        :draggable="false"
        @click=" toggleInfoWindow(m,index)"
        />
    </gmap-map>
    
  </div>

</template>

<script src="./Mapa.js"></script>
<style lang="scss" src="./Mapa.scss" scoped></style>