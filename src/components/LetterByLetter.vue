<template>
  <pre>{{text}}</pre>
</template>

<script>
import EventBus from '../EventBus';

export default {
  props: ['display'],
  data: () => ({
    text: '',
  }),
  created() {
    for (let i = 0; i < this.display.length; i += 1) {
      const lettre = this.display[i];
      setTimeout(() => {
        this.text += lettre;
        if (lettre === '\n') {
          EventBus.$emit('new-line');
        }
        if (this.text.length === this.display.length) {
          EventBus.$emit('command-executed');
        }
      }, 10 * i);
    }
  },
};
</script>

<style>

</style>
