<template>
  <div class="command">
    <Prompt/>{{display.command}}
    <pre>{{display.result}}</pre>
  </div>
</template>

<script>
import Prompt from './Prompt';

export default {
  props: ['display'],
  components: {
    Prompt,
  },
};
</script>

<style scoped>
pre {
  margin: 0;
}
</style>
