<template>
  <v-hover v-slot:default="{ hover }">
    <v-card id="card" :to="{name:'clinic'}">
      <v-img class="white--text align-end" height="200px" src="@/assets/image/0.png">
        <v-expand-transition>
          <div v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text"
            style="height: 100%;">
            <div>

            </div>
          </div>
        </v-expand-transition>
        <div class="badge">
          <div class="price">$ 200</div>
          <div class="text">Standar Charges</div>
        </div>
        <div class="main-title">Clinic Domenic</div>
      </v-img>

      <v-card-text class="text--primary">
        <h4>Treatment Mane</h4>
        <h5>Teeament descrioption</h5>
      </v-card-text>

    </v-card>
  </v-hover>
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
#card {
  box-shadow: none;
  border: 1px solid rgb(226, 226, 226);

  .badge {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 20px;
    border-radius: 0 0 0 10px;
    background-color: #00cae9ee;

    .price {
      font-weight: bold;
      font-size: 18px;
    }

    .text {
      font-size: 10px;
      color: white;
    }
  }
  .main-title{
    color: white !important;
    position: absolute;
    left: .5rem;
    bottom: .5rem;
  }

  .v-card--reveal {
    background-color: #00cae9;
    align-items: flex-end;
    bottom: 0;
    justify-content: flex-start;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
}

</style>
