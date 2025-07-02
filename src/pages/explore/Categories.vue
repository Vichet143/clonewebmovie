<template>
  <section>
    <div class="mx-auto max-w-screen-xxl px-4 sm:px-6 lg:px-16">
      <!-- first -->
      <div class="flex flex-wrap ">
        <Fcategories></Fcategories>
      </div>
      
      <!-- Subtitle filters -->
      <div class="flex flex-wrap">
        <Scategories></Scategories>
      </div>
      
      <!-- Region filters -->
      <div class="flex flex-wrap">
        <Tcategories></Tcategories>
      </div>
      
      <!-- Status filters -->
      <div class="flex flex-wrap">
        <Fourtwocategories></Fourtwocategories>
      </div>
      
      <!-- Sort filters -->
      <div class=" flex flex-wrap">
        <Fivecategories></Fivecategories>
      </div>
      
      <router-view> </router-view>
      
      <i
        @click="handleup"
        class="fa-solid fa-chevron-up fixed left-[90%] top-[91%] md:left-[96%] md:top-[91%] text-[10px] text-green-500 bgcategories p-[10px] rounded-[100%]"
      ></i>
    </div>
  </section>
</template>

<script>
import Allexplore from "./Allexplore.vue";
import Fcategories from "./Fcategories.vue";
import Fivecategories from "./Fivecategories.vue";
import Fourtwocategories from "./Fourtwocategories.vue";
import Scategories from "./Scategories.vue";
import Tcategories from "./Tcategories.vue";

export default {
  components: {
    Allexplore,
    Fcategories,
    Scategories,
    Tcategories,
    Fourtwocategories,
    Fivecategories
  },
  data() {
    return {
      selectedSubtitle: 'all',
      selectedRegion: 'all',
      selectedStatus: 'all',
      selectedSort: 'popular',
    };
  },
  methods: {
    handleup() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>