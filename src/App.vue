<template>
  <v-app>
    <main-menu @toggleDialog="dialog = $event" />
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>
    <end-page />
    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <login />
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import MainMenu from '@/components/Menu'
import EndPage from '@/components/EndPage'
import Login from '@/views/auth/Login'

export default {
  name: 'App',
  components: {
    MainMenu, EndPage, Login
  },
  data: () => ({
    dialog: false    
  })
};
</script>

