<script>
import CommonCard from "./CommonCard.vue";
import { store } from "../store";
export default {
  components: {
    CommonCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="cards-album">
    <!-- <CommonCard v-for="card in store.cards.data" /> -->
    <div class="element" v-for="card in store.cards.data">
      <img :src="card.card_images[0].image_url" :alt="card.name" />
      <h3>{{ card.name }}</h3>
      <span> {{ card.archetype }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.cards-album {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  .element {
    width: calc(100% / 5 - 20px);
    margin: 10px;
    background-color: $main;
    text-align: center;
    h3 {
      color: white;
      margin-bottom: 10px;
      padding: 10px;
    }
  }
}
</style>
