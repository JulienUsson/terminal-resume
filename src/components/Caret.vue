<template>
  <div id="caret">
  </div>
</template>

<script>
export default {
};
</script>

<style>
@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#caret {
  display: inline-block;
  height: 1em;
  width: 5px;
  background-color: white;
  animation-name: blink;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
</style>
