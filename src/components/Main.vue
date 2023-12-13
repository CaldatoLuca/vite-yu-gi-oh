<script>
import MainCards from "./MainCards.vue";
import axios from "axios";
import { store } from "../store";

export default {
  components: {
    MainCards,
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
  },
};
</script>

<template>
  <main>
    <div v-if="store.cards.length !== 0" class="container">
      <section class="search">
        <select name="card-search" id="card-search">
          <option value="1">Alien</option>
        </select>
      </section>

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

  .search {
    padding: 20px;
  }
}
</style>
