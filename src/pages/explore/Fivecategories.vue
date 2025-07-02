<template>
    <div class="flex flex-wrap">
      <router-link
        v-for="(item, index) in storecategories"
        :key="index"
        :to="`/explore/${item.id}`"
        :class="[
          'mt-[10px] py-[4px] px-[15px] w-fit font-[500] text-[15px] rounded-[20px] mr-[10px]',
          getBackgroundClass(item.id),
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
          { name: "Popular", id: 15},
          { name: "Last Update", id: 25 },
          { name: "Release Date", id: 35 },
        ],
      };
    },
    methods: {
      getBackgroundClass(id) {
        const routeId = parseInt(this.$route.params.id);
        console.log(routeId);
  
        // If id is 1 (fixed), always apply the active background\
        if (id === 15) {
          return [25, 35, 45].includes(routeId)
            ? "bgcategories text-white"
            : "bg-white text-black";
        }
  
        // If id matches route param, apply active background
        return routeId === id ? "bg-white text-black" : "bgcategories text-white";
      },
    },
  };
  </script>
  