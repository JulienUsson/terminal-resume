<template>
  <div id="terminal"
       @click="focusCommandInput">
  
    <input id="command"
           type="text"
           ref="command"
           autofocus
           v-model="command"
           @keydown.enter="executeCommand" />
  
    <div id="content">
      <Commands :display="commands"></Commands>
      <CommandInput v-if="showCommandLine">{{command}}</CommandInput>
    </div>
  
  </div>
</template>

<script>
import Commands from './Commands';
import CommandInput from './CommandInput';
import CommandModel from '../models/Command';

export default {
  data: () => ({
    commands: [],
    command: '',
    showCommandLine: true,
  }),
  methods: {
    focusCommandInput() {
      this.$refs.command.focus();
    },
    executeCommand() {
      this.showCommandLine = false;
      const command = new CommandModel(this.command);
      this.commands.push(command);
      this.command = '';
      this.showCommandLine = true;
      this.$nextTick(() => {
        this.scrollDown();
      });
    },
    scrollDown() {
      window.scrollTo(0, document.documentElement.scrollHeight);
    },
  },
  components: {
    Commands,
    CommandInput,
  },
};
</script>

<style>
#terminal {
  height: 100%;
}

#content {
  padding: 1em;
}

#command {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
</style>
