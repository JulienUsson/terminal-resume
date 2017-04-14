<template>
  <div id="terminal"
       @click="focusCommandInput">
  
    <input id="command"
           type="text"
           ref="command"
           v-model="command" />
  
    <div id="content">
      <div>
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
</style>
