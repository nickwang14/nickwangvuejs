<template>
  <a :href='href' @click.prevent='scroll'>
    <div class='scroll-wrapper'>
      <svg height="5" width="5" :class='scrollDirection'>
        <line x1="2.5" y1="0" x2="2.5" y2="5" style="stroke:rgb(255,0,0);stroke-width:2" />
      </svg>
    </div>
  </a>
</template>

<script>
export default {
  props: ['href', 'scrollup'],
  methods: {
    scroll() {
      document.querySelector(this.href).scrollIntoView({ behavior: 'smooth' });
    },
  },
  computed: {
    scrollDirection() {
      if (!this.scrollup) { return { 'scroll-down': true }; }
      return { 'scroll-up': true };
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.scroll-wrapper {
  left: 50%;
  position: absolute;
  text-align: center;
  bottom: 2%;
  transform: translate(-50%, -50%);
  border: 2px solid #FFFFFF;
  height: 46px;
  width: 30px;
}

.scroll-down {
  animation-duration: 1.8s;
  animation-name: scroll;
  animation-iteration-count: infinite;
}

.scroll-up {
  animation-duration: 1.8s;
  animation-name: scroll;
  animation-direction: reverse;
  animation-iteration-count: infinite;
}
.scrolldown-p2 {
  animation-delay: .9s;
}

@keyframes scroll {
  0% {
    opacity: 0;
    transform: translate(0, -8px);
  }
  50% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 8px);
  }
}

</style>
