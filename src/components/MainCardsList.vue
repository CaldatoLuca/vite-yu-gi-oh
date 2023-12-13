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
    <CommonCard
      v-for="card in store.cards"
      :src="card.card_images[0].image_url"
      :name="card.name"
      :archetype="card.archetype"
    />
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.cards-album {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  :deep(.element) {
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
