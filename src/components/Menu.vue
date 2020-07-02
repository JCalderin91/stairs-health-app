<template>
  <v-app-bar hide-on-scroll color="primary" :class="{'pb-10':home}" app>
    <v-toolbar-title class="container-logo" :to="{name:'home'}">
      <img class="logo-app" src="@/assets/logo-white.png" alt="">
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <div class="menu-nav-bar">
      <span>How it Works</span>
      <span>Explode Savings</span>
      <span>Become a Member</span>
      <span>For Providers</span>
      <span>Contact Us</span>
      <span>{{$route.name}}</span>
    </div>


    <v-spacer></v-spacer>

    <div class="menu-nav-bar">
      <span>Login</span>
      <span>|</span>
      <span>Register</span>
    </div>
    
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      //
    }),
    computed: {
      home () {
        return this.$route.name !== 'home'
      }
    }
  }
</script>

<style scoped lang="scss">
.container-logo,
.logo-app{
  height: 100%;
}
.menu-nav-bar{
  span{
    padding: 3px 5px;
    margin: 0 3px;
    color: white;
  }
}
</style>