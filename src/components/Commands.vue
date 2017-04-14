<template>
  <div>
    <Command v-for="command in display"
             :key="command.$index"
             :display="command">
    </Command>
  </div>
</template>

<script>
import Command from './Command';

export default {
  props: ['display'],
  components: {
    Command,
  },
};
</script>

<style>

</style>
