<template>
  <section>
    <Herobanner></Herobanner>
    <contiuewatching></contiuewatching>
    <Latingupdate></Latingupdate>
    <Topkpopdrama></Topkpopdrama>
    <Topcdrama></Topcdrama>
    <Hollywood></Hollywood>
    <Anime></Anime>
    <Upcoming></Upcoming>
  </section>
</template>

<script>
import Anime from "./h/Anime.vue";
import Contiuewatching from "./h/Contiuewatching.vue";
import Herobanner from "./h/Herobanner.vue";
import Hollywood from "./h/Hollywood.vue";
import Latingupdate from "./h/Latingupdate.vue";
import Topcdrama from "./h/Topcdrama.vue";
import Topkpopdrama from "./h/Topkpopdrama.vue";
import Upcoming from "./h/Upcoming.vue";

export default {
  components: {
    Herobanner,
    Contiuewatching,
    Latingupdate,
    Topkpopdrama,
    Topcdrama,
    Hollywood,
    Anime,
    Upcoming,
  },
};
</script>