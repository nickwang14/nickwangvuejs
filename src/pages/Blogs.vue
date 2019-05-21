<template>
  <div class="container">
    <div></div>
    <h1>{{ name }}</h1>
    <h2></h2>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  data() {
    return {
      name: 'Posts',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  background-color: blue;
}
</style>
