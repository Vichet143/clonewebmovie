<template>
  <component :is="currentComponent" />
</template>
  
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

// Components
import Cardpopular from "./Cardpopular.vue";
import Cardregoin from "./Cardregoin.vue";
import Cardsubtitle from "./Cardsubtitle.vue";
import Allexplore from "./Allexplore.vue";
import Hollywood from "./Hollywoodexplore.vue";
import Malay from "./Malay.vue";

const route = useRoute();

const componentMap = {
  1: Allexplore,
  2: Cardpopular,
  3: Cardregoin,
  4: Cardsubtitle,
  5: Hollywood,

  12: Allexplore,
  22: Cardpopular,
  32: Cardregoin,
  42: Cardsubtitle,
  52: Hollywood,
  62: Malay,
  72: Cardpopular,

  13: Allexplore,
  23: Cardpopular,
  33: Cardregoin,
  43: Cardsubtitle,
  53: Hollywood,
  63: Malay,
  73: Cardpopular,
  83: Cardregoin,
  93: Cardsubtitle,

  14: Allexplore,
  24: Cardpopular,
  34: Cardregoin,
  44: Cardsubtitle,

  15: Allexplore,
  25: Cardpopular,
  35: Cardregoin,
};

const currentComponent = computed(() => {
  return componentMap[Number(route.params.id)]; // fallback
});
</script>
