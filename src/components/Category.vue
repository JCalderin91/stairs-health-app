<template>
  <div id="category">
    <div class="image-container" :class="{'active primary': active}">
      <img class="image" :src="getImg()" alt="">
    </div>
    <span class="text">{{title}}</span>
  </div>
</template>

<script>

export default {
  name: 'category',
  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      deaful: false
    }
  },
  data: () => ({
    //
  }),
  methods: {
    getImg () {
      return require('../assets/image/' + this.img)
    },
  }
};
</script>
<style scope lang="scss">
#category{
  display: flex;
  flex-direction: column;
  margin: 20px auto 25px auto;
  .text{
    color: #000;
    margin-top: 3px;
    font-size: 12px;
  }
  .image-container{
    height: 40px;
    width: 40px;
    padding: 20px;
    border-radius: 50%;
    border: 2px solid #888;
    .image{
      width: 100%;
      height: 100%;
    }
    &.active{
      border: none;
      .image{
        filter: invert(1);
      }
    }
  }
}
</style>
