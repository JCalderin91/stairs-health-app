<template>

 
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 600px; width: 100%;z-index:0"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
    </l-map>
  
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LControl } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LControl
  },
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  methods: {
    showAlert() {
      alert("Click!");
    }
  }
};
</script>

<style>
.example-custom-control {
  background: #fff;
  padding: 0 0.5em;
  border: 1px solid #aaa;
  border-radius: 0.1em;
}
.custom-control-watermark {
  font-size: 200%;
  font-weight: bolder;
  color: #aaa;
  text-shadow: #555;
}
</style>
