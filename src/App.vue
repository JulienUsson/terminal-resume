<template>
  <terminal>
  </terminal>
</template>

<script>
import KonamiCode from 'konami-code';
import Terminal from './components/Terminal';

export default {
  name: 'app',
  created() {
    const konami = new KonamiCode();
    konami.listen(() => {
      this.$store.dispatch('executeCommand', {
        command: 'echo There is no konami code.',
        showCommand: false,
      });
    });
  },
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
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

a {
  color: white;
}

pre {
  margin: 0;
}
</style>
