<template>
  <div id="terminal"
       @click="focusCommandInput">
  
    <input id="command"
           type="text"
           ref="command"
           autofocus
           autocomplete="off"
           autocorrect="off"
           autocapitalize="off"
           spellcheck="false"
           :value="command"
           @input="updateCommand"
           @keydown.enter="executeCommand" />
  
    <div id="content">
      <Command v-for="command in commands"
               :key="command.$index"
               :value="command">
      </Command>
      <CommandInput v-if="showCommandLine">{{command}}</CommandInput>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Command from './Command';
import CommandInput from './CommandInput';

export default {
  computed: {
    ...mapGetters([
      'commands',
      'command',
      'showCommandLine',
    ]),
  },
  methods: {
    executeCommand() {
      if (this.showCommandLine) {
        this.$store.dispatch('executeCommand');
      }
    },
    updateCommand(e) {
      this.$store.dispatch('updateCommand', e.target.value);
    },
    focusCommandInput() {
      this.$refs.command.focus();
    },
    scrollDown() {
      window.scrollTo(0, document.documentElement.scrollHeight);
    },
  },
  created() {
    this.$store.dispatch('executeCommand', {
      command: 'motd',
      showCommand: false,
    });
  },
  components: {
    Command,
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
  position: fixed;
  opacity: 0;
  z-index: -100;
  height: 100%;
  width: 100%;
}
</style>
