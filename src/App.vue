<template>
  <terminal>
  </terminal>
</template>

<script>
import Terminal from './components/Terminal';

export default {
  name: 'app',
  components: {
    Terminal,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  background-color: black;
  color: white;
}
</style>
