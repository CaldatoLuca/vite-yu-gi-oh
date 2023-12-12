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
  <div class="element" v-for="card in store.cards.data">
    <img :src="card.card_images[0].image_url" :alt="card.name" />
    <h3>{{ card.name }}</h3>
    <span> {{ card.archetype }}</span>
  </div>
</template>

<style scoped lang="scss"></style>
