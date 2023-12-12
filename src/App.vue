<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    Header,
    Main,
  },
};
</script>

<template>
  <div class="container"><Header></Header> <Main></Main></div>
</template>

<style scoped lang="scss">
@use "./assets/scss/partials/mixin.scss" as *;

.container {
  @include container;
}
</style>
