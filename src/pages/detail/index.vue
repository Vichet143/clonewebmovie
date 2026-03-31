<template>
  <section class="flex-1 text-white px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto min-h-screen max-w-5xl">
      <div v-if="loading" class="text-center text-lg">Loading details...</div>

      <div v-else-if="error" class="text-center text-red-400">{{ error }}</div>

      <div v-else-if="movie" class="grid gap-6 md:grid-cols-[280px_1fr]">
        <img
          :src="posterUrl"
          :alt="movieTitle"
          class="w-full max-w-[280px] rounded-lg object-cover"
        />

        <div>
          <h1 class="text-2xl sm:text-3xl font-bold">{{ movieTitle }}</h1>
          <p class="mt-2 text-gray-300">
            {{ releaseDateText }}
            <span v-if="ratingText"> | Rating: {{ ratingText }}</span>
          </p>

          <p class="mt-4 leading-7 text-gray-200">{{ overviewText }}</p>

          <button
            class="mt-6 rounded bg-red-700 px-4 py-2 font-semibold hover:bg-red-600"
            @click="goBack"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

const API_KEY = "aacdbe83dedab8fc913bd72adf3fdbad";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export default {
  data() {
    return {
      loading: true,
      error: "",
      movie: null,
      fallbackImage: "https://via.placeholder.com/500x750?text=No+Image",
    };
  },
  computed: {
    source() {
      return this.$route.params.source;
    },
    itemId() {
      return this.$route.params.id;
    },
    mediaType() {
      return this.$route.query.mediaType || "movie";
    },
    movieTitle() {
      return this.movie?.title || this.movie?.name || "Untitled";
    },
    overviewText() {
      if (this.source === "tvmaze") {
        return (
          this.stripHtml(this.movie?.summary) || "No description available."
        );
      }

      return this.movie?.overview || "No description available.";
    },
    posterUrl() {
      if (!this.movie) return this.fallbackImage;

      if (this.source === "tvmaze") {
        return (
          this.movie?.image?.original ||
          this.movie?.image?.medium ||
          this.fallbackImage
        );
      }

      return this.movie?.poster_path
        ? `${TMDB_IMG_URL}${this.movie.poster_path}`
        : this.fallbackImage;
    },
    releaseDateText() {
      if (this.source === "tvmaze") {
        return this.movie?.premiered || "Release date unknown";
      }

      return (
        this.movie?.release_date ||
        this.movie?.first_air_date ||
        "Release date unknown"
      );
    },
    ratingText() {
      if (this.source === "tvmaze") {
        return this.movie?.rating?.average || "";
      }

      return this.movie?.vote_average || "";
    },
  },
  methods: {
    goBack() {
      const from = this.$route.query.from;

      if (typeof from === "string" && from.length > 0) {
        this.$router.push(from);
        return;
      }

      // Fallback for direct open/refreshed detail page.
      this.$router.push("/");
    },
    stripHtml(value) {
      if (!value) return "";
      return value.replace(/<[^>]*>/g, "").trim();
    },
    async fetchDetail() {
      this.loading = true;
      this.error = "";

      try {
        if (this.source === "tvmaze") {
          const { data } = await axios.get(
            `https://api.tvmaze.com/shows/${this.itemId}`,
          );
          this.movie = data;
        } else {
          const endpoint = this.mediaType === "tv" ? "tv" : "movie";
          const { data } = await axios.get(
            `${TMDB_BASE_URL}/${endpoint}/${this.itemId}?api_key=${API_KEY}`,
          );
          this.movie = data;
        }
      } catch (error) {
        this.error = "Failed to load movie details.";
        this.movie = null;
        console.error("Failed to fetch detail:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        this.fetchDetail();
      },
    },
  },
};
</script>
