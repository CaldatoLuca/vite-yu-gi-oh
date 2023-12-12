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
    axios.get(store.apiUrl).then((apiData) => {
      store.cards = apiData.data;
    });
  },
};
</script>

<template>
  <main>
    <div class="container">
      <section class="search">
        <select name="card-search" id="card-search">
          <option value="1">Alien</option>
        </select>
      </section>

      <MainCards />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/mixin" as *;
main {
  background-color: $main;
  .container {
    @include container(960px);
    .search {
      padding: 20px;
    }
  }
}
</style>
