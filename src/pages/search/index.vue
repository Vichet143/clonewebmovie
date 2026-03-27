<template>
  <div
    class="text-gray-500 transition font-[600] pr-[15px] p-[10px] text-[15px] dark:text-white flex cursor-pointer"
    role="button"
    tabindex="0"
    aria-haspopup="dialog"
    :aria-expanded="showSearchModal ? 'true' : 'false'"
    @click="openSearchModal"
    @keydown.enter.prevent="openSearchModal"
    @keydown.space.prevent="openSearchModal"
  >
    <i class="fa-brands fa-sistrix mx-[10px] inline-block text-[18px]"></i>
    <span class="hidden lg:block">Search</span>
  </div>

  <div
    v-if="showSearchModal"
    class="fixed inset-0 z-[111]"
    role="dialog"
    tabindex="-1"
    aria-labelledby="hs-slide-up-animation-modal-label"
  >
    <!-- Background overlay -->
    <div class="absolute inset-0 bg-black/50" @click="closeSearchModal"></div>

    <!-- Modal -->
    <div
      class="relative z-50 colorprea mt-7 opacity-100 transition-all sm:max-w-5xl w-full m-3 sm:mx-auto"
    >
      <div
        class="w-full flex flex-col bg-white shadow-2xs pointer-events-auto rounded-lg"
        style="background-color: #303030"
      >
        <!-- Header with close + input -->
        <div
          class="flex items-center bg-white dark:bg-gray-950 w-full h-[63px] px-2"
        >
          <!-- Close button -->
          <button
            class="flex items-center justify-center px-6 h-10 text-white hover:bg-white/10 transition"
            type="button"
            @click="closeSearchModal"
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

          <!-- Search input -->
          <form @submit.prevent="searchTVShows" class="flex w-full">
            <input
              v-model="query"
              @input="handleSearchInput"
              type="search"
              class="flex-1 border-b-2 border-white outline-none bg-transparent text-gray-400 text-[20px] px-2 py-[5px]"
              placeholder="Search"
            />
          </form>
        </div>

        <!-- Search Results -->
        <div
          class="h-[calc(100vh-70px)] overflow-y-auto pb-[100px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <div
            v-if="hidemoviezin > 0 && movies.length < 1"
            class="px-8 py-6 text-gray-300"
          >
            No results found for "{{ query }}".
          </div>

          <div v-else class="ml-[27px] sm:ml-[10px]">
            <div class="flex items-center relative">
              <div class="w-full flex gap-[10px] flex-wrap">
                <Cardforsearch
                  v-for="(movie, index) in movies"
                  :key="index"
                  :image="
                    movie.show.image?.medium || movie.show.image?.original
                  "
                  :title="movie.show.name"
                />
              </div>
            </div>
          </div>
          <Cards v-if="hidemoviezin < 1" />
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
      showSearchModal: false,
      categories: [
        { name: "All", id: 1 },
        { name: "TvSeries", id: 2 },
        { name: "Movie", id: 3 },
        { name: "Anime", id: 4 },
        { name: "Hollywood", id: 5 },
      ],
      query: "",
      movies: [],
      searchTimeout: null,
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
      const searchQuery = this.query.trim();

      if (!searchQuery) {
        this.movies = [];
        this.hidemoviezin = 0;
        return;
      }

      try {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`,
        );
        const data = await res.json();
        this.movies = data.filter(
          (movie) =>
            movie.show &&
            movie.show.image &&
            (movie.show.image.medium || movie.show.image.original) &&
            movie.show.name,
        );
        this.hidemoviezin = 1;
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      }
    },
    handleSearchInput() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.searchTVShows();
      }, 300);
    },
    openSearchModal() {
      this.showSearchModal = true;
    },
    closeSearchModal() {
      this.showSearchModal = false;
    },
  },
};
</script>
