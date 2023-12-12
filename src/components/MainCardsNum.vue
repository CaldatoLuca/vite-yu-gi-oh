<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="card-number">
    <span>Found {{ store.cards.data.length }} cards</span>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.card-number {
  background-color: $secondary;
  color: white;
  padding: 15px;
  font-weight: bold;
}
</style>
