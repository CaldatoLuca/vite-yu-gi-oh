<script>
import MainCards from "./MainCards.vue";
export default {
  components: {
    MainCards,
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
