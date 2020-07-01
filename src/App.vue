<template>
  <v-app>
    <main-menu />
    <v-content>
      <router-view/>
    </v-content>
    <end-page/>
  </v-app>
</template>

<script>
import MainMenu from '@/components/Menu'
import EndPage from '@/components/EndPage'
export default {
  name: 'App',
  components: {
    MainMenu, EndPage
  },
  data: () => ({
    dialog: false    
  })  
};
</script>

<style lang="scss" scope >
*{
  font-family: 'Raleway', sans-serif; 
  color: #444;
}


</style>