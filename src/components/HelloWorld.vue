<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      Hello
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: '',
      position: '',
    },
    isLogin: false,
    alert: false,
  }),
  methods: {
    storeIt() {
      this.$store.commit('change', this.form);
      this.isLogin = this.$store.getters.isLogin;
      this.alert = false;
      if (this.isLogin) {
        this.$router.push('/view');
      } else {
        this.alert = true;
      }
    },
  },
};
</script>
