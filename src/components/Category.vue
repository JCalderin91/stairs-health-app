<template>
  <div id="category" :class="{'hover': !noHover}">
    <div class="image-container" :class="{'noHome': noHome}">
      <img class="image" :src="getImg()" :alt="title">
    </div>
    <span v-if="!noText" class="text">{{title}}</span>
  </div>
</template>

<script>

export default {
  name: 'category',
  props: {
    title: {
      type: String
    },
    img: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    noText: {
      type: Boolean,
      default: false
    },
    noHover: {
      type: Boolean,
      default: false
    }

  },
  data: () => ({
    //
  }),
  methods: {
    getImg () {
      return require('../assets/image/' + this.img)
    },
  }, 
  computed: {
    noHome () {
      return this.$route.name !== 'home'
    }
  }
};
</script>
<style scoped lang="scss">
#category{
  // display: flex;
  // flex-direction: column;
  margin: 20px auto 25px auto;
  text-align: center;
  transition: all .3s ease-in-out;
  &.hover{
    cursor: pointer;
    &:hover{
      transform: scale(1.05);
      .image-container{
        border: none;
        background-color: #00cae9;
        .image{
          filter: invert(1);
        }
      }
    }
  }
  .text{
    color: #000;
    padding-top: 2px;
    font-size: 12px;
  }
  .image-container{
    height: 40px;
    width: 40px;
    padding: 20px;
    border-radius: 50%;
    border: 2px solid #888;
    margin: 0 auto;    
    &.noHome{
      height: 100px !important;
      width: 100px !important;
    }
    .image{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
