<template>
  <div class="command">
    <div v-if="value.showCommand">
      <Prompt :path="value.path" /><pre class="command">{{value.command}}</pre>
    </div>
    <pre v-html="value.result"></pre>
  </div>
</template>

<script>
import Prompt from './Prompt';

export default {
  props: ['value'],
  components: {
    Prompt,
  },
};
</script>

<style scoped>
.command {
  display: inline;
}
</style>
