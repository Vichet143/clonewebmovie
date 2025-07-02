
<template>
  <Navbar></Navbar>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
  <Footer></Footer>
</template>

<script>
import Footer from "./components/footer.vue";
import Navbar from "./components/Navbar.vue";
import Explore from "./pages/explore/Explore.vue";
// import Explore from "./pages/explore/Explore.vue";
export default {
  components: {
    Navbar,
    Footer,
    Explore,
    
  },
  mounted() {
    setTimeout(() => window.HSStaticMethods.autoInit(), 100);
  },
};
</script>