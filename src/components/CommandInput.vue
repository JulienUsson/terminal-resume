<template>
  <div id="command-input">
    <Prompt/>
    <pre class="command"><slot></slot></pre>
    <Caret/>
  </div>
</template>

<script>
import Caret from './Caret';
import Prompt from './Prompt';

export default {
  components: {
    Prompt,
    Caret,
  },
};
</script>

<style scoped>
.command {
  display: inline;
}
</style>
