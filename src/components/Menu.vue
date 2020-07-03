<template>
  <v-app-bar color="primary"  app>
    <v-toolbar-title class="container-logo">
      <router-link tag="a" :to="{name:'home'}">
        <img class="logo-app" src="@/assets/logo-white.png" alt="">
      </router-link>  
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
      <span @click="login">Login</span>
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
    },
    methods: {
      login () {
        this.$emit('toggleDialog', true)
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
    cursor: pointer;
    padding: 3px 5px;
    margin: 0 3px;
    color: white;
  }
}
</style>