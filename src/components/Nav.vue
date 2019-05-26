<template>
  <nav>
    <ul>
      <li>
      <router-link to="/404">
        <h1>BLOGS</h1>
      </router-link>
      </li>
      <li>
      <router-link to="/">
        <div id="home">
          <img src="../assets/nick-logo-white.png">
        </div>
      </router-link>
      </li>
      <li>
      <router-link to="/404">
        <h1>ABOUT</h1>
      </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      name: 'Nick Wang Photography',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  position: fixed;
  width: 100%;
  height: 15vh;
  margin-top: 4vh;
  z-index: 99;
}
#home {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#home img {
  max-height: 100%;
}
ul {
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
}
nav ul li {
  list-style: none;
  flex-grow: 1;
  height: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
}
h1 {
  margin: auto;
  font-weight: lighter;
}
</style>
