<template>
  <span id="prompt">
      julien@usson:{{path}}$
    </span>
</template>

<script>
import DirectoryService from '../services/DirectoryService';

export default {
  data: () => ({
    path: DirectoryService.path,
  }),
};
</script>

<style>

</style>
