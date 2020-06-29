<template>
  <v-container>
    
  </v-container>
</template>

<script>
import apiService from '../services';

export default {
  data: () => ({
    candidate: {
      name: '',
      position: '',
    },
    isValid: false,
    posts: [],
    headers: [
      {
        text: 'Id',
        align: 'right',
        value: 'id',
      },
      { text: 'Title', value: 'title', align: 'left' },
      { text: 'Description', value: 'body', align: 'left' },
    ],

  }),
  mounted() {
    this.$store.dispatch('GET_LOGIN');
    this.isValid = this.$store.getters.isLogin;
    if (this.isValid) {
      this.candidate = this.$store.getters.login;
    } else {
      this.$router.push('/');
    }
    this.listPosts();
  },
  methods: {
    clearAndBack() {
      this.$store.commit('change', '{}');
      this.$router.push('/');
    },
    listPosts() {
      apiService.getPosts()
        .then(response => response.data)
        .then((response) => {
          this.posts = response
        });
    },
  }
};
</script>
