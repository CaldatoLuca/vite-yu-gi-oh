<script>
import CommonCard from "./CommonCard.vue";

export default {
  components: {
    CommonCard,
  },
};
</script>

<template>
  <div class="cards-album">
    <CommonCard />
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
