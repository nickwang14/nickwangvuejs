<template>
  <div class="container">
    <hero
      v-for='section in sections'
      v-bind:key='section.key'
      v-bind:section='section'
    >
    </hero>
  </div>
</template>

<script>
import Hero from '../components/Home/Hero';

export default {
  name: 'Home',
  components: { hero: Hero },
  props: ['title', 'source'],
  data() {
    return {
      sections: [
        { key: 1, title: 'Muaythai', source: 'muaythai' },
        { key: 2, title: 'Muaythai', source: '' },
        { key: 3, title: 'Muaythai', source: '' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  background-color: blue;
}
a {
  color: #42b983;
}
</style>
