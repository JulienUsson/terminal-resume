<template>
  <div class="command">
    <div v-if="display.showCommand">
      <Prompt/>{{display.command}}
    </div>
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
