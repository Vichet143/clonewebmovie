<template>
  <section>
    <div
      id="default-carousel"
      class="relative w-full mt-[-1px]"
      data-carousel="slide"
    >
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden md:h-[500px]">
        <!-- Items -->
        <div class="duration-700 hidden ease-in-out" data-carousel-item>
          <img
            src="/src/img/banner1.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-fill"
            alt="Banner 1"
          />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/img/bannner2.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-fill"
            alt="Banner 2"
          />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/img/banner3.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-fill"
            alt="Banner 3"
          />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/img/banner4.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-fill"
            alt="Banner 4"
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50"
        >
          <svg
            class="w-4 h-4 text-green-400 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50"
        >
          <svg
            class="w-4 h-4 text-green-400 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      // Carousel functionality
      const carousel = document.querySelector('[data-carousel="slide"]');
      const items = carousel.querySelectorAll("[data-carousel-item]");
      const indicators = carousel.querySelectorAll("[data-carousel-slide-to]");
      const prevButton = carousel.querySelector("[data-carousel-prev]");
      const nextButton = carousel.querySelector("[data-carousel-next]");

      let currentIndex = 0;

      function showSlide(index) {
        // Hide all slides
        items.forEach((item) => item.classList.add("hidden"));

        // Show the selected slide
        items[index].classList.remove("hidden");

        // Update indicators
        indicators.forEach((indicator, i) => {
          if (i === index) {
            indicator.classList.remove("bg-white/50");
            indicator.classList.add("bg-white");
            indicator.setAttribute("aria-current", "true");
          } else {
            indicator.classList.remove("bg-white");
            indicator.classList.add("bg-white/50");
            indicator.setAttribute("aria-current", "false");
          }
        });

        currentIndex = index;
      }

      function nextSlide() {
        const nextIndex = (currentIndex + 1) % items.length;
        showSlide(nextIndex);
      }

      function prevSlide() {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(prevIndex);
      }

      // Initialize
      showSlide(0);

      // Add event listeners
      nextButton.addEventListener("click", nextSlide);
      prevButton.addEventListener("click", prevSlide);

      indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => showSlide(index));
      });

      // Optional: Auto-advance slides
      let interval = setInterval(nextSlide, 5000);

      // Pause on hover
      carousel.addEventListener("mouseenter", () => clearInterval(interval));
      carousel.addEventListener("mouseleave", () => {
        interval = setInterval(nextSlide, 5000);
      });
    });
  },
};
</script>