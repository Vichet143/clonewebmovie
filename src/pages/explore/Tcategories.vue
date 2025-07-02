<template>
  <div class="flex flex-wrap">
    <router-link
      v-for="(item, index) in storecategories3"
      :key="index"
      :to="`/explore/${item.id}`"
      :class="[
        'mt-[10px] py-[4px] px-[15px] w-fit font-[500] text-[15px] rounded-[20px] mr-[10px]',
        getBackgroundClass2(item.id),
      ]"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      storecategories3: [
        { name: "All Regions", id: 13 },
        { name: "South Korea", id: 23 },
        { name: "Chinese", id: 33 },
        { name: "United States", id: 43 },
        { name: "Thailand", id: 53 },
        { name: "Philippine", id: 63 },
        { name: "Japanese", id: 73 },
        { name: "Hong Kong", id: 83 },
        { name: "Taiwan", id: 93 },
      ],
    };
  },
  methods: {
    getBackgroundClass2(id) {
      const routeId2 = parseInt(this.$route.params.id);
      console.log(routeId2);
      // If id is 1 (fixed), always apply the active background\
      if (id === 13) {
        return [23, 33, 43, 53, 63, 73,83,93].includes(routeId2)
          ? "bgcategories text-white"
          : "bg-white text-black";
      }

      // If id matches route param, apply active background
      return routeId2 === id
        ? "bg-white text-black"
        : "bgcategories text-white";
    },
  },
};
</script>
    