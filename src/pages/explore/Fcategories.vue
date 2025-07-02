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
        { name: "All", id: 1 },
        { name: "TvSeries", id: 2 },
        { name: "Movie", id: 3 },
        { name: "Anime", id: 4 },
        { name: "Hollywood", id: 5 },
      ],
    };
  },
  methods: {
    getBackgroundClass(id) {
      const routeId = parseInt(this.$route.params.id) || 1;

      if (id === 1) {
        return [2, 3, 4, 5].includes(routeId)
          ? "bgcategories text-white"
          : "bg-white text-black";
      }

      return routeId === id ? "bg-white text-black" : "bgcategories text-white";
    },
  },
};
</script>
