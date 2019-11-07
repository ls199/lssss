<template>
  <div>
    <h3>{{title}}</h3>
    <button v-on:click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<script>
export default {
  props: ["title"],
 postFontSize: 1
};
</script>
<style scoped>
</style>