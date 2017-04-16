<template>
  <span id="prompt">
              julien@usson:{{localPath}}$
            </span>
</template>

<script>
import DirectoryService from '../services/DirectoryService';

export default {
  props: ['path'],
  data: () => ({
    localPath: DirectoryService.path,
  }),
  created() {
    if (this.path) {
      this.localPath = this.path;
    }
  },
};
</script>

<style>

</style>
