<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',
  components: { Nav },
};
</script>

<style>
#app {
  font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
}
a {
  color: white;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  display: flex;
}
</style>
