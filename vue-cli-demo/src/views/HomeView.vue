<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <h2>Recommended</h2>

      <div class="recommended">
        <ProductCrd
          v-for="product in inventory.slice(0, 3)"
          :key="product.id"
          :product="product"
          :addToCart="addToCart"
          class="card"
        />
      </div>
    </main>
  </div>
</template>

<script>
import ProductCrd from "@/components/ProductCrd.vue";

export default {
  name: "HomeView",
  props: ["inventory", "addToCart"],
  components: {
    ProductCrd,
  },
};
</script>
