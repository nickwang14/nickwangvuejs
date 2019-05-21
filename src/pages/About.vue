<template>
  <div class="container">
    <div></div>
    <h1>{{ name }}</h1>
    <h2></h2>
  </div>
</template>

<script>

export default {
  name: 'About',
  data() {
    return {
      name: 'About Me',
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
