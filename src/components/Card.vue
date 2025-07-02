<template>
  <div
    class="card w-[200px] sm:w-[250px] md:w-[320px] object-contain lg:w-[320px] md:object-fill grid bg-white border border-gray-200 rounded-[5px] shadow-sm bg-card dark:border-gray-700"
  >
    <img
      class="rounded-t-[5px] h-[110px] sm:h-[120px] md:h-[150px] image"
      :src="image"
      alt="product image"
    />
    <div class="my-[7px] ml-[10px]">
      <p
        class="text-[8px] md:text-[10px] font-[700] text-gray-900 dark:text-white max-w-full max-h-full"
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title"],
};
</script>