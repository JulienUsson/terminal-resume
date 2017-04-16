<template>
  <span id="prompt">
      julien@usson:{{path}}$
    </span>
</template>

<script>
import Directory from '../Directory';

export default {
  data: () => ({
    path: Directory.path,
  }),
};
</script>

<style>

</style>
