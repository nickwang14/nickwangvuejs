<template>
  <div class="container">
    <h1>{{ section.title }}</h1>
    <div>
      <img v-bind:src="getImgUrl(section.source)"/>
    </div>
  </div>
</template>

<script>

export default {
  props: ['section'],
  data() {
    return {
      getImgUrl(section) {
        const images = require.context('../../assets/', false, /\.jpg$/);
        return images(`./${section.source}.jpg`);
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container{
  background-color: blue;
}
</style>

