<script>
export default {
  props: ["src", "name", "archetype"],
};
</script>

<template>
  <div class="element">
    <img :src="src" :alt="name" />
    <h3>{{ name }}</h3>
    <span> {{ archetype }} </span>
  </div>
</template>

<style scoped lang="scss"></style>
