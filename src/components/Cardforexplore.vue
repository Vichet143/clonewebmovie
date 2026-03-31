<template>
  <component
    :is="itemId ? 'router-link' : 'div'"
    :to="itemId ? detailRoute : undefined"
    class="card w-[150px] object-contain md:w-[330px] h-full md:object-fill flex-grow-1 bg-white border border-gray-200 rounded-[5px] shadow-sm bg-card dark:border-gray-700"
  >
    <img
      class="rounded-t-[5px] h-[100px] md:h-[200px] image"
      :src="image"
      alt="product image"
    />
    <div class="my-[7px] ml-[10px]">
      <p
        class="text-[8px] md:text-[15px] font-[700] text-gray-900 dark:text-white max-w-full max-h-full"
      >
        {{ title }}
      </p>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    itemId: [String, Number],
    source: {
      type: String,
      default: "tmdb",
    },
    mediaType: {
      type: String,
      default: "movie",
    },
  },
  computed: {
    detailRoute() {
      return {
        path: `/movie-detail/${this.source}/${this.itemId}`,
        query: {
          mediaType: this.mediaType,
          from: this.$route.fullPath,
        },
      };
    },
  },
};
</script>
