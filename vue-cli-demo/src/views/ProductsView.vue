<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCrd
        v-for="product in inventory"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
        class="card"
      />
    </div>
  </main>
</template>

<script>
import ProductCrd from "@/components/ProductCrd.vue";
export default {
  name: "ProductsView",
  props: ["inventory", "addToCart"],
  components: { ProductCrd },
};
</script>
