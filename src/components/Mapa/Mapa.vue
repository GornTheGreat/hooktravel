<template>
  <div id="map">
    <gmap-map ref="map"
      :center="center" 
      :zoom="13.5" 
      map-type-id="hybrid" 
      style="width: 100%; height: 100%" 
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false
      }">
      <gmap-marker 
        :key="index" 
        v-for="(m, index) in markers" 
        :position="m.position" 
        :clickable="true" 
        :draggable="true"
        @click="center=m.position"/>
    </gmap-map>
  </div>
</template>

<script src="./Mapa.js"></script>
<style lang="scss" src="./Mapa.scss" scoped></style>