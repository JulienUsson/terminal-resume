<template>
  <div id="command-input">
    <Prompt/>
    <slot></slot>
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

<style>

</style>
