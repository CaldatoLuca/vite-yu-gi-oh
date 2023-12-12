<script>
import MainCardsNum from "./MainCardsNum.vue";
import MainCardsList from "./MainCardsList.vue";

export default {
  components: {
    MainCardsNum,
    MainCardsList,
  },
};
</script>

<template>
  <section class="cards-list">
    <MainCardsNum />
    <MainCardsList />
  </section>
</template>

<style scoped lang="scss">
.cards-list {
  background-color: white;
  padding: 50px;
}
</style>
