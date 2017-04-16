<template>
  <LetterByLetter :display="motd">
  </LetterByLetter>
</template>

<script>
import LetterByLetter from './LetterByLetter';
import MotdCommand from '../commands/MotdCommand';

export default {
  data: () => ({
    motd: MotdCommand(),
  }),
  components: {
    LetterByLetter,
  },
};
</script>

<style>

</style>
