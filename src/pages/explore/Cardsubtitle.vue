<template>
  <section>
    <div class="mt-6">
      <div class="flex items-center relative">
        <div class="w-full flex gap-[10px] flex-wrap">
          <Cardforexplore
            v-for="(item, index) in repository"
            :key="index"
            :image="IMG_URL + item.backdrop_path"
            :title="item.title"
          />
        </div>
      </div>
    </div>
  </section>
</template>
    
    <script>
import Cardforexplore from "../../components/Cardforexplore.vue";
import movieRepositoryStore, { IMG_URL } from "../../store/apllastestupdate";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Cardforexplore,
  },
  async mounted() {
    await this.fetchRepository();
  },
  computed: {
    ...mapState(movieRepositoryStore, ["repository"]),
    paginatedRepository() {
      return this.repository.slice(
        this.currentIndex,
        this.currentIndex + this.pageSize
      );
    },
  },
  methods: {
    ...mapActions(movieRepositoryStore, ["fetchRepository"]),
    prevPage() {
      if (this.currentIndex - this.pageSize >= 0) {
        this.currentIndex -= this.pageSize;
      }
    },
    nextPage() {
      if (this.currentIndex + this.pageSize < this.repository.length) {
        this.currentIndex += this.pageSize;
      }
    },
    respone() {
      const width = window.innerWidth;

      if (width < 640) {
        this.pageSize = 2;
      } else if (width < 768) {
        this.pageSize = 3;
      } else if (width < 1024) {
        this.pageSize = 3;
      } else if (width < 1280) {
        this.pageSize = 4;
      } else if (width < 1536) {
        this.pageSize = 5;
      } else {
        this.pageSize = 5; // optional, for very large screens
      }
    },
  },
  data() {
    return {
      IMG_URL, // access imported constant directly
    };
  },
};
</script>
    