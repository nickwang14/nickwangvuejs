<template>
  <div class='container'>
    <img :src="require('../assets/working.png')"/>
    <div class='text'>
    <h1>OOPS! This Page isn't up right now</h1>
    <p>I'm working on it as best I can!</p>
    <p>
      If you really want to see it, feel free to rush me at
      <a href='nickwangphotography@gmail.com'>nickwangphotography@gmail.com</a>
    </p>
    <br/>
      <myButton>
        <back>
          Click Here
        </back>
      </myButton>
    </div>
  </div>
</template>
<script>
import Back from '../components/Back';
import MyButton from '../components/MyButton';

export default {
  components: { Back, MyButton },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-top: 20vh;
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
}
.text {
  flex: 1;
  margin: 10;
  z-index: 10;
}
img {
  flex: 1;
  position: absolute;
  margin-left: -10vw;
  height: 60vh;
  max-width: 100vw;
  widows: 60vw;
  object-fit: cover;
  bottom: 0;
}
@media only screen and (max-width: 768px) {
  img {
    top: 50vh;
  }
}
</style>
