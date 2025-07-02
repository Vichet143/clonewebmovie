<template>
    <div
      class="card object-contain w-[231px] sm:w-[269px] md:w-[240px] lg:w-[314px] xl:w-[298px] h-full md:object-fill grid bg-white border border-gray-200 rounded-[5px] shadow-sm bg-card dark:border-gray-700"
    >
      <img
        class="rounded-t-[5px] h-[180px] lg:h-[200px] image"
        :src="image"
        alt="product image"
      />
      <div class="my-[7px] ml-[10px]">
        <p
          class="text-[8px] md:text-[12px] font-[700] text-gray-900 dark:text-white max-w-full max-h-full"
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