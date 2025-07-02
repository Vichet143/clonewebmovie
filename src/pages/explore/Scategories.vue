<template>
  <div class="flex flex-wrap">
    <router-link
      v-for="(item, index) in storecategories"
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
      storecategories: [
        { name: "All Subtitles", id: 12},
        { name: "English", id: 22 },
        { name: "Khmer", id: 32 },
        { name: "Indonesian", id: 42 },
        { name: "Malay", id: 52 },
        { name: "Thai", id: 62 },
        { name: "Arabic", id: 72 },
      ],
    };
  },
  methods: {
    getBackgroundClass2(id) {
      const routeId2 = parseInt(this.$route.params.id);
      console.log(routeId2);
      // If id is 1 (fixed), always apply the active background\
      if (id === 12) {
        return [22, 32, 42, 52, 62,72].includes(routeId2)
          ? "bgcategories text-white"
          : "bg-white text-black";
      }

      // If id matches route param, apply active background
      return routeId2 === id ? "bg-white text-black" : "bgcategories text-white";
      
    },
  },
};
</script>
  