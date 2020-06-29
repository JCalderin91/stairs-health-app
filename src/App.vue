<template>
  <v-app>
    <v-app-bar class="py-4" color="primary" app>
      <v-toolbar-title class="container-logo">
        <img class="logo-app" src="@/assets/logo-white.png" alt="">
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="menu-nav-bar">
        <span>How it Works</span>
        <span>Explode Savings</span>
        <span>Become a Member</span>
        <span>For Providers</span>
        <span>Contact Us</span>
      </div>
 

      <v-spacer></v-spacer>

      <div class="menu-nav-bar">
        <span>Login</span>
        <span>|</span>
        <span>Register</span>
      </div>
      
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>   
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    dialog: false,
  }),
};
</script>

<style lang="scss" scope >
*{
  font-family: 'Raleway', sans-serif; 
}
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