<template>
  <div class="container">
    <hero
      class='hero'
      v-for='section in sections'
      :key='section.id'
      :section='section'
      :images='images'
      :length='length'
    >
    </hero>
  </div>
</template>

<script>
import Hero from '../components/Home/Hero';

export default {
  name: 'Home',
  components: { Hero },
  computed: {
    images() {
      const allFiles = require.context('../assets/', false, /\.(png|jpe?g|svg)$/);
      const images = {};
      allFiles.keys().map((item) => { images[item.replace('./', '')] = allFiles(item); }); // eslint-disable-line array-callback-return
      return images;
    },
    length() { return this.sections.length; },
  },
  data() {
    return {
      sections: [
        { id: 1, name: 'muaythai', source: 'muaythai.jpg' },
        { id: 2, name: 'landscape', source: 'landscape.jpg' },
        { id: 3, name: 'animals', source: 'animals.jpg' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: proximity;
  scroll-snap-points-y: repeat(100%);
  scroll-snap-type: y proximity;
}
.hero {
  scroll-snap-align: start;
  position: relative;
}
a {
  color: #42b983;
}
</style>
