<template>
  <div class="command">
    <Prompt/>{{display.command}}
    <LetterByLetter :display="display.result"></LetterByLetter>
  </div>
</template>

<script>
import Prompt from './Prompt';
import LetterByLetter from './LetterByLetter';
import EventBus from '../EventBus';

export default {
  props: ['display'],
  components: {
    Prompt,
    LetterByLetter,
  },
  created() {
    EventBus.$emit('new-line');
  },
};
</script>

<style>
</style>
