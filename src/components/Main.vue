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
  computed: {
    searchArchetype() {
      let apiArchetype = this.store.searchArchetypesApiUrl;
      if (this.store.searchArchetype !== "") {
        apiArchetype += this.store.searchArchetype;
        axios.get(apiArchetype).then((apiData) => {
          this.store.cards = apiData.data.data;
        });
      } else {
        axios.get(this.store.apiUrl).then((apiData) => {
          this.store.cards = apiData.data.data;
        });
      }
    },
  },
};
</script>

<template>
  <main>
    <div v-if="store.cards.length !== 0" class="container">
      <MainSearch @searchArchetype="searchArchetype" />
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
