<script>
import MainCards from "./MainCards.vue";
import MainSearch from "./MainSearch.vue";
import axios from "axios";
import { store } from "../store";

export default {
  components: {
    MainCards,
    MainSearch,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(this.store.apiUrl).then((apiData) => {
      this.store.cards = apiData.data.data;
    });
    axios.get(this.store.archetypesApiUrl).then((apiData) => {
      this.store.archetypes = apiData.data;
    });
  },
};
</script>

<template>
  <main>
    <div v-if="store.cards.length !== 0" class="container">
      <MainSearch />
      <MainCards />
    </div>
    <div v-else><h1>Loading...</h1></div>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/mixin" as *;
main {
  background-color: $main;
}
</style>
