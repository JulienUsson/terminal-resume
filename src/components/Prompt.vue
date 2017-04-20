<template>
  <span id="prompt">
                  julien@usson:{{ path || statePath }}$
                </span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['path'],
  computed: {
    ...mapGetters({
      statePath: 'path',
    }),
  },
};
</script>

<style>

</style>
