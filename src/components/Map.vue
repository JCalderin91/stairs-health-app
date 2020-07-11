<template>
    <gmap-map
      ref="gmap"
      :center="center"
      :zoom="12"
      style="height: 100vh;"
    >
      
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="toggleInfoWindow(m,index)">
      </gmap-marker>

      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <card inMap />
      </gmap-info-window>

    </gmap-map>
</template>

<script>
import Card from '@/components/Card'
export default {
  components: {
    Card
  },
  name: "GoogleMap",
  data() {
    return {
      //a default center for the map
      center: {
        lat: 52.511950,
        lng: 6.089625
      },
      map: null,
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: [{
          name: "House of Aleida Greve",
          description: "description 1",
          date_build: "",
          position: {
            lat: 52.512942,
            lng: 6.089625
          }
        },
        {
          name: "House of Potgieter",
          description: "description 2",
          date_build: "",
          position: {
            lat: 52.511950,
            lng: 6.091056
          }
        },
        {
          name: "House of Johannes Cele",
          description: "description 3",
          date_build: "",
          position: {
            lat: 52.511047,
            lng: 6.091728
          }
        },
      ],
    };
  },
  mounted() {
    //set bounds of the map
    this.$refs.gmap.$mapPromise.then((map) => {
      const bounds = new google.maps.LatLngBounds()
      for (let m of this.markers) {
        bounds.extend(m.position)
      }
      map.fitBounds(bounds);
    });
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
};
</script>