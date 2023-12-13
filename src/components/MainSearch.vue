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
    <select v-model="store.searchArchetype" name="card-search">
      <option value="">All</option>
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
