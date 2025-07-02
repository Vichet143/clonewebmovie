<template>
  <Cardsubtitle></Cardsubtitle>
  <Cardexplore></Cardexplore>
  <Cardpopular></Cardpopular>
</template>

<script>
import Cardpopular from "./Cardpopular.vue";
import Cardexplore from "./Cardregoin.vue";
import Cardsubtitle from "./Cardsubtitle.vue";
export default {
  components: {
    Cardexplore,
    Cardsubtitle,
    Cardpopular,
  },
};
</script>