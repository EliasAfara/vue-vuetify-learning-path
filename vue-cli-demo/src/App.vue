<template>
  <nav>
    <header class="top-bar spread">
      <nav class="top-bar-nav">
        <router-link to="/" class="top-bar-link">
          <i class="icofont-spoon-and-fork"></i>
          <span>Home</span>
        </router-link>
        <router-link to="/products" class="top-bar-link">
          <span>Products</span>
        </router-link>
        <router-link to="/past-orders" class="top-bar-link">
          <span>Past Orders</span>
        </router-link>
      </nav>
      <div @click="toggleSidebar" class="top-bar-cart-link">
        <i class="icofont-cart-alt icofont-1x" />
        <span>Cart ({{ totalItemInCart }})</span>
      </div>
    </header>
  </nav>

  <router-view :inventory="inventory" :addToCart="addToCart" />

  <SidebarComponent
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
import food from "./food.json";
import SidebarComponent from "@/components/SidebarComponent.vue";
export default {
  name: "App",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      showSidebar: false,
      inventory: food,
      cart: {},
    };
  },
  computed: {
    totalItemInCart() {
      return Object.keys(this.cart).length;
    },
  },
  methods: {
    addToCart(name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0;
      this.cart[name] += quantity;
      console.log(this.cart);
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    removeItem(name) {
      delete this.cart[name];
    },
  },
  // async mounted() {
  //   const res = await fetch("./food.json");
  //   const data = await res.json();
  //   this.inventory = data;
  //   console.log(this.inventory);
  // },
};
</script>
