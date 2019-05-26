<template>
  <div class='container' :id='"hero"+this.section.id'>
    <div v-on:click='print'>
      <h1>{{ section.name.toUpperCase() }}</h1>
    </div>
    <slot/>
    <img :src='images[section.source]'/>
    <scroll :href='this.nextSectionSelector' :scrollup='this.scrollup'/>
  </div>
</template>

<script>
import Scroll from '../Scroll';

export default {
  components: { Scroll },
  props: ['section', 'images', 'length'],
  computed: {
    nextSectionSelector() {
      if (this.section.id !== this.length) return `#hero${this.section.id + 1}`;
      return '#hero1';
    },
    scrollup() {
      if (this.section.id === this.length) return true;
      return false;
    },
  },
  methods: {
    print() {
      console.log(this.scrollup);
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.container{
  overflow: hidden;
}
img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}
h1 {
  width: 100%;
  top: 40%;
  position: absolute;
  font-weight: lighter;
}
</style>

