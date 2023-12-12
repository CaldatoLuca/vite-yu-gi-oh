<script>
import MainCards from "./MainCards.vue";
import axios from "axios";

export default {
  components: {
    MainCards,
  },
  data() {
    return {
      cards: [],
      apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    };
  },
  created() {
    axios.get(this.apiUrl).then((apiData) => {
      this.cards = apiData.data;
      console.log(this.cards.data[0].name);
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

      <h1 v-for="card in cards.data">{{ card.name }}</h1>
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
