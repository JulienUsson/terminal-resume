<template>
  <div id="terminal"
       @click="focusCommandInput">
    <input id="command"
           type="text"
           ref="command"
           v-model="command" /> {{command}}
    <Caret></Caret>
  </div>
</template>

<script>
import Caret from './Caret';

export default {
  data: () => ({
    content: 'content',
    command: 'command',
    disabled: false,
  }),
  methods: {
    focusCommandInput() {
      this.$refs.command.focus();
    },
  },
  components: {
    Caret,
  },
};
</script>

<style scoped>
#terminal {
  min-height: 100%;
  width: 100%;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

#command {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
</style>
