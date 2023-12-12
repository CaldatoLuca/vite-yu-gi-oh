<script>
import CommonCard from "./CommonCard.vue";
export default {
  components: {
    CommonCard,
  },
};
</script>

<template>
  <div class="cards">
    <CommonCard />
    <CommonCard />
    <CommonCard />
    <CommonCard />
    <CommonCard />
    <CommonCard />
    <CommonCard />
    <CommonCard />
  </div>
</template>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  :deep(.card) {
    width: calc(100% / 5 - 20px);
    margin: 10px;
  }
}
</style>
