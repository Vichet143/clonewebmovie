<template>
  <section>
    <div class="mx-auto max-w-screen-xxl px-4 sm:px-6 lg:px-8">
      <h1 class="mt-[20px] ml-[15px] text-white text-[23px] font-bold">
        Anime
        <i class="fa-solid fa-angle-right ml-[20px] text-[16px]"></i>
      </h1>
      <div class="mt-6 relative">
        <!-- Left Button -->
        <button
          v-if="showLeftArrow"
          @click="scrollLeft"
          class="absolute top-[35%] left-[-3%] z-10 flex items-center justify-center px-4 h-10 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              d="M36.121,3.293,34.707,1.879a1,1,0,0,0-1.414,0L11.879,23.293a1,1,0,0,0,0,1.414L33.293,46.121a1,1,0,0,0,1.414,0l1.414-1.414a1,1,0,0,0,0-1.414L16.828,24,36.121,4.707A1,1,0,0,0,36.121,3.293Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
        <div
          ref="movieContainer"
          class="flex overflow-x-auto scroll-smooth no-scrollbar space-x-4"
        >
          <Card
            v-for="(item, index) in crepository"
            :key="index"
            :image="item.show.image.medium"
            :title="item.show.name"
            class=" flex-shrink-0"
          />
        </div>
        <!-- Right Button -->
        <button
          @click="scrollRight"
          class="absolute top-[35%] right-[-2%] z-10 flex items-center justify-center h-10 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              d="M14.707,1.879a1,1,0,0,0-1.414,0L11.879,3.293a1,1,0,0,0,0,1.414L31.172,24,11.879,43.293a1,1,0,0,0,0,1.414l1.414,1.414a1,1,0,0,0,1.414,0L36.121,24.707a1,1,0,0,0,0-1.414Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
          
  <script>
import Card from "../../components/Card.vue";
import movieanimedramaRepositoryStore from "../../store/anime";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Card,
  },
  mounted() {
    this.fetchRepository();
    this.$nextTick(() => {
      const container = this.$refs.movieContainer;
      if (container) {
        container.addEventListener("scroll", this.updateArrowVisibility);
        this.updateArrowVisibility();
      }
    });
  },
  unmounted() {
    const container = this.$refs.movieContainer;
    if (container) {
      container.removeEventListener("scroll", this.updateArrowVisibility);
    }
  },
  computed: {
    // Alias repository to crepository to keep rest of the code consistent
    crepository() {
      return this.repository;
    },
    ...mapState(movieanimedramaRepositoryStore, ["repository"]),
  },
  methods: {
    ...mapActions(movieanimedramaRepositoryStore, ["fetchRepository"]),
    scrollLeft() {
      const container = this.$refs.movieContainer;
      const scrollAmount = 250 * 2 + 16 * 2;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });

      // Wait for scroll to apply
      setTimeout(this.updateArrowVisibility, 300);
    },
    scrollRight() {
      const container = this.$refs.movieContainer;
      const scrollAmount = 250 * 2 + 16 * 2;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Wait for scroll to apply
      setTimeout(this.updateArrowVisibility, 300);
    },
    updateArrowVisibility() {
      const container = this.$refs.movieContainer;
      this.showLeftArrow = container.scrollLeft > 10;
    },
  },
  data() {
    return {
      showLeftArrow: false,
    };
  },
};
</script>
          