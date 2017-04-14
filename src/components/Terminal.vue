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
      <pre>{{content}}</pre>
      <div id="command-line"
           v-if="displayCommandLine">
        <Prompt/> {{command}}
        <Caret/>
      </div>
    </div>
  
  </div>
</template>

<script>
import Caret from './Caret';
import Prompt from './Prompt';

export default {
  data: () => ({
    content: '',
    command: '',
    displayCommandLine: true,
  }),
  methods: {
    focusCommandInput() {
      this.$refs.command.focus();
    },
    executeCommand() {
      if (this.command === '') {
        return;
      }
      this.displayCommandLine = false;
      this.content += this.command;
      this.content += '\n';
      this.command = '';
      this.displayCommandLine = true;
      this.$nextTick(() => {
        this.scrollDown();
      });
    },
    scrollDown() {
      window.scrollTo(0, document.documentElement.scrollHeight);
    },
  },
  components: {
    Prompt,
    Caret,
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

pre {
  margin: 0;
}
</style>
