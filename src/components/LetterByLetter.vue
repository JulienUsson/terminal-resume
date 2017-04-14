<template>
  <pre>{{text}}</pre>
</template>

<script>
export default {
  props: ['display'],
  data: () => ({
    text: '',
  }),
  created() {
    for (let i = 0; i < this.display.length; i += 1) {
      const lettre = this.display[i];
      setTimeout(() => { this.text += lettre; }, 10 * i);
    }
  },
};
</script>

<style>

</style>
