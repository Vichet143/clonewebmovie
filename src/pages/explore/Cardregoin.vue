<template>
  <section>
    <div class="mt-6">
      <div class="flex items-center relative">
        <div class="w-full flex gap-[10px] flex-wrap">
          <Cardforexplore
            v-for="(item, index) in krepository"
            :key="index"
            :image="IMG_URL + item.backdrop_path"
            :title="item.original_name"
          />
        </div>
      </div>
    </div>
  </section>
</template>
      
  <script>
import Cardforexplore from "../../components/Cardforexplore.vue";
import moviekdramaRepositoryStore, { IMG_URL } from "../../store/apltopkdrama";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Cardforexplore,
  },
  async mounted() {
    await this.fetchkRepository();
  },
  computed: {
    ...mapState(moviekdramaRepositoryStore, ["krepository"]),
    paginatedkRepository() {
      return this.krepository.slice(
        this.currentIndex,
        this.currentIndex + this.pageSize
      );
    },
  },
  methods: {
    ...mapActions(moviekdramaRepositoryStore, ["fetchkRepository"]),
    prevPage() {
      if (this.currentIndex - this.pageSize >= 0) {
        this.currentIndex -= this.pageSize;
      }
    },
    nextPage() {
      if (this.currentIndex + this.pageSize < this.krepository.length) {
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
      