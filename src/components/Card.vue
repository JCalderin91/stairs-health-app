<template>
  <v-card id="card" :to="{name:'clinic'}"> 
    <v-img
      class="white--text align-end"
      height="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
      src="@/assets/image/0.png"
    >
      <div class="badge">
        <div class="price">$ 200</div>
        <div class="text">Standar Charges</div>
      </div>
      <v-card-title>Clinic Domenic</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <h4>Treatment Mane</h4>
      <h5>Teeament descrioption</h5>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  data: () => ({
   
  }),
  methods: {
    
  },
};
</script>

<style scoped lang="scss">
#card{
  .badge{
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 20px;
    border-radius: 0 0 0 10px;
    background-color: #00cae9ee;
    .price{
      font-weight: bold;
      font-size: 18px;
    }
    .text{
      font-size: 10px;
    }
  }
}
</style>
