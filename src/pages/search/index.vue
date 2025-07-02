<template>
  <li class="">
    <a
      class="text-gray-500 transition font-[600] pr-[15px] p-[10px] text-[15px] dark:text-white flex"
      href="#"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="hs-slide-up-animation-modal1"
      data-hs-overlay="#hs-slide-up-animation-modal1"
      ><i class="fa-brands fa-sistrix mx-[10px] text-[18px]"></i>
      <span class="hidden lg:block">Search</span>
    </a>
  </li>

  <div
    id="hs-slide-up-animation-modal1"
    class="hs-overlay hidden fixed top-[-3.7%] end-[-2%] sm:end-[19%] md:end-[34%] lg:end-[49%] xl:end-[58%] z-[10]"
    role="dialog"
    tabindex="-1"
    aria-labelledby="hs-slide-up-animation-modal-label"
  >
    <!-- Background overlay -->
    <div class="fixed inset-0 bg-black/50 z-[-1]"></div>

    <div
      class="hs-overlay-open:mt-7 colorprea hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
    >
      <div
        class="w-[400px] h-full sm:w-[576px] md:w-[768px] lg:w-[992px] xl:min-w-[1250px] flex flex-col bg-white shadow-2xs pointer-events-auto"
        style="background-color: #303030"
      >
        <div class="flex justify-between items-center">
          <div class="grid space-y-2">
            <div
              class="bg-white dark:bg-gray-950 w-[1250px] h-[63px] flex items-center"
            >
              <button
                class="flex items-center justify-center px-6 h-10 text-white hover:bg-white/10 transition"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="hs-slide-up-animation-modal1"
                data-hs-overlay="#hs-slide-up-animation-modal1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M36.121,3.293,34.707,1.879a1,1,0,0,0-1.414,0L11.879,23.293a1,1,0,0,0,0,1.414L33.293,46.121a1,1,0,0,0,1.414,0l1.414-1.414a1,1,0,0,0,0-1.414L16.828,24,36.121,4.707A1,1,0,0,0,36.121,3.293Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </button>
              <form @submit.prevent="searchTVShows">
                <label>
                  <input
                    id="search"
                    v-model="query"
                    type="search"
                    class="border-b-2 border-white w-[310px] sm:w-[505px] md:w-[695px] lg:w-[920px] xl:w-[1165px] bg-transparent text-gray-400 text-[20px] outline-0"
                    placeholder="Search"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap ml-[27px] sm:ml-[10px] mb-[10px]">
          <div
            v-for="(item, index) in categories"
            :key="index"
            @click="navigateToCategory(item.id)"
            class="cursor-pointer"
            :class="[
              'mt-[10px] py-[4px] px-[15px] w-fit font-[500] text-[15px] rounded-[20px] mr-[10px] cursor-pointer',
              selectedId === item.id
                ? 'bg-white text-black'
                : 'bgcategories text-white',
            ]"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="">
          <div
            class="h-[1200px] overflow-y-auto pb-[1000px]  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            <div class="ml-[27px] sm:ml-[10px]">
              <div class="flex items-center relative">
                <div class="w-[100] flex gap-[10px] flex-wrap">
                  <Cardforsearch
                    v-for="(movie, index) in movies"
                    :key="index"
                    :image="movie.show.image?.medium"
                    :title="movie.show.name"
                  ></Cardforsearch>
                </div>
              </div>
            </div>
            <Cards v-if="hidemoviezin < 1 "></Cards>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cardforsearch from "../../components/Cardforsearch.vue";
import Cards from "./Cards.vue";

export default {
  components: {
    Cards,
    Cardforsearch,
  },
  data() {
    return {
      hidemoviezin: 0,
      selectedId: 1,
      categories: [
        { name: "All", id: 1 },
        { name: "TvSeries", id: 2 },
        { name: "Movie", id: 3 },
        { name: "Anime", id: 4 },
        { name: "Hollywood", id: 5 },
      ],
      query: "",
      movies: [],
    };
  },
  methods: {
    navigateToCategory(id) {
      this.selectedId = id;
    },
    getBackgroundClass(id) {
      const routeId = parseInt(this.$route.params.id) || 1;

      if (id === 1) {
        return [2, 3, 4, 5].includes(routeId)
          ? "bgcategories text-white"
          : "bg-white text-black";
      }

      return routeId === id ? "bg-white text-black" : "bgcategories text-white";
    },
    async searchTVShows() {
      if (!this.query) return;

      try {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${this.query}`
        );
        const data = await res.json();
        this.movies = data.filter(
          (movie) =>
            movie.show &&
            movie.show.image &&
            movie.show.image.medium &&
            movie.show.name
        );
        this.hidemoviezin = 1;
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      }
    },
  },
};
</script>
