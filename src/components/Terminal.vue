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
import EventBus from '../EventBus';

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
    },
    scrollDown() {
      window.scrollTo(0, document.documentElement.scrollHeight);
    },
  },
  watch: {
    command() {
      this.scrollDown();
    },
  },
  created() {
    EventBus.$on('new-line', () => {
      this.$nextTick(() => {
        this.scrollDown();
      });
    });

    EventBus.$on('command-executed', () => {
      this.showCommandLine = true;
      EventBus.$emit('new-line');
    });
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
