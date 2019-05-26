<template>
  <div class='back' v-on:click='back'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>
<style scoped>
.back {
  display: inline;
}
</style>
