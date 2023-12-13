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
  <section class="search">
    <select name="card-search">
      <option v-for="search in store.archetypes" :value="search.archetype_name">
        {{ search.archetype_name }}
      </option>
    </select>
  </section>
</template>

<style scoped lang="scss">
.search {
  padding: 20px;
}
</style>
