<template>
  <div class="command">
    <Prompt/>{{display.command}}
    <LetterByLetter :display="display.result"></LetterByLetter>
  </div>
</template>

<script>
import Prompt from './Prompt';
import LetterByLetter from './LetterByLetter';

export default {
  props: ['display'],
  components: {
    Prompt,
    LetterByLetter,
  },
};
</script>

<style scoped>
pre {
  margin: 0;
}
</style>
