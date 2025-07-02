<template>
  <section>
    <div class=" mx-[10px]">
      <div class="flex items-center relative">
        <div class="w-full flex gap-[10px] flex-wrap">
          <Cardforsearch
            v-for="(item, index) in upcomingrepository"
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
import Cardforsearch from "../../components/Cardforsearch.vue";
import movieupcomingdramaRepositoryStore, {
  IMG_URL,
} from "../../store/upcoming";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Cardforsearch,
  },
  async mounted() {
    await this.fetchRepository();
  },
  computed: {
    ...mapState(movieupcomingdramaRepositoryStore, ["upcomingrepository"]),
    paginatedupcomingRepository() {
      return this.upcomingrepository.slice(
        this.currentIndex,
        this.currentIndex + this.pageSize
      );
    },
  },
  methods: {
    ...mapActions(movieupcomingdramaRepositoryStore, [
      "fetchRepository",
    ]),
    prevPage() {
      if (this.currentIndex - this.pageSize >= 0) {
        this.currentIndex -= this.pageSize;
      }
    },
    nextPage() {
      if (this.currentIndex + this.pageSize < this.upcomingrepository.length) {
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
        