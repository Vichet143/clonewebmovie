<template>
  <h1 class="text-white text-center my-[20px] text-[20px] font-bold">
    Frequently Asked Questions
  </h1>
  <div class="space-y-4">
    <div class="max-w-[900px] m-auto">
      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex items-center justify-between gap-1.5 border rounded-t-[5px] pl-[20px] p-3 bg-faq text-white"
        >
          <h2 class="text-[15px] font-medium">Video error ?</h2>

          <svg
            class="size-5 shrink-0 transition-transform duration-500 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p
          class="px-4 py-4 text-gray-900 rounded-b-[5px] dark:text-white bg-faq mb-[20px] text-[14px]"
        >
          Try reload it
          <i class="fa-solid fa-rotate-right text-purple-600 text-[25px]"></i>
          if it still not working send episode number and title or link to here
          <i class="fa-solid fa-id-badge text-purple-600 text-[25px]"></i>.
          (Note: Our webside and app test and debug using google chrome)
        </p>
      </details>
      <details
        @toggle="handlefaq"
        class="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          class="flex items-center justify-between gap-1.5 border pl-[20px] p-3 bg-faq text-white"
        >
          <h2 class="text-[15px] font-medium">Subtitle error ?</h2>

          <svg
            class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p
          class="px-4 py-4 text-gray-900 dark:text-white bg-faq mb-[20px] text-[14px]"
        >
          Send episode number and title or link to here
          <i
            class="fa-solid fa-id-badge text-purple-600 text-[25px] ml-[20px]"
          ></i>
        </p>
      </details>
      <details
        @toggle="handlefaq"
        class="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          class="flex items-center justify-between gap-1.5 border pl-[20px] p-3 bg-faq text-white"
        >
          <h2 class="text-[15px] font-medium">Other error ?</h2>

          <svg
            class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p
          class="px-4 py-4 text-gray-900 dark:text-white bg-faq mb-[20px] text-[14px]"
        >
          Tell us what's your problem to here
          <i
            class="fa-solid fa-id-badge text-purple-600 text-[25px] ml-[20px]"
          ></i>
        </p>
      </details>
      <details
        @toggle="handlefaq"
        class="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          class="flex items-center justify-between gap-1.5 border pl-[20px] p-3 bg-faq text-white"
        >
          <h2 class="text-[15px] font-medium">Request drama ?</h2>

          <svg
            class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p
          class="px-4 py-4 text-gray-900 dark:text-white bg-faq mb-[20px] text-[14px]"
        >
          Send title of your drama or anime to here
          <i
            class="fa-solid fa-id-badge text-purple-600 text-[25px] ml-[20px]"
          ></i>
        </p>
      </details>
      <details
        @toggle="handlefaq"
        class="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          class="flex items-center justify-between gap-1.5 border pl-[20px] p-3 bg-faq text-white"
        >
          <h2 class="text-[15px] font-medium">Redirect ads proplem ?</h2>

          <svg
            class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <div
          class="px-4 pt-4 pb-[250px] text-gray-900 dark:text-white bg-faq mb-[20px] text-[14px]"
        >
          <p class="py-4 text-gray-900 dark:text-white mb-[20px] text-[14px]">
            Follow this video introduction for those who can't watch video.
            *Note use browser such as Google Chrome, Firefox, safari ...
          </p>
          <div
            class="max-w-[865px] h-[400px] bg-white dark:bg-gray-950 flex items-center justify-center"
          >
            <div class=" ">
              <h1 class="text-[25px] font-[600] flex justify-center">
                Video Unavailable
              </h1>
              <p class="text-[14px] flex justify-center font-[600]">
                This video may no longer exist, or you don't have permission to
                view it.
              </p>
              <a
                href=""
                class="flex justify-center text-[12px] mt-[10px] font-[600]"
                >Learn more</a
              >
            </div>
          </div>
        </div>
      </details>
      <details
        @toggle="handlefaq"
        class="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          class="flex items-center justify-between gap-1.5 border pl-[20px] p-3 bg-faq text-white"
        >
          <h2 class="text-[15px] font-medium">Install mobile app ?</h2>

          <svg
            class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div
          class="px-4 pt-4 pb-[250px] text-gray-900 dark:text-white bg-faq mb-[20px] text-[14px] relative"
        >
          <div
            class="max-w-[865px] h-[180px] bg-white flex items-center justify-center"
          >
            <div class=" ">
              <p
                class="text-[14px] max-w-[740px] h-auto text-center font-[600] text-gray-950"
              >
                This Facebook post is no longer available. It may have been
                removed or the privacy settings of the post may have changed.
              </p>
            </div>
          </div>
          <a
            href=""
            class="absolute left-[75%] sm:left-[80%] md:left-[88%] bottom-[10%] text-[12px] text-gray-500"
            >Help Center<i class="fa-brands fa-facebook ml-[12px] text-blue-600"></i></a
          >
        </div>
      </details>
      <details
        @toggle="handlefaq"
        class="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          class="flex items-center justify-between gap-1.5 border pl-[20px] p-3 bg-faq text-white"
        >
          <h2 class="text-[15px] font-medium">Change Subtitle Style ?</h2>

          <svg
            class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p class="px-4 pt-4 text-gray-900 dark:text-white bg-faq mb-[20px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>
    </div>
  </div>
  <div class="max-w-[1200px] m-auto block text-center mt-[40px] text-white text-[14px]">
    <a href="" class="ciconfaq py-[10px] px-[20px] rounded-[5px]">
    <i class="fa-brands fa-facebook-f mr-[10px]"></i>Find us on Facebook
  </a>
  </div>
  <div class="mb-[210px]"></div>
</template>

<script>
export default {
  methods: {
    handlefaq(event) {
      const detail = event.target;
      if (detail.open) {
        detail.classList.add("mt-[10px]");
      } else {
        detail.classList.remove("mt-[10px]");
      }
      const sum = detail.querySelector("summary");
      const p = detail.querySelector("p");
      if (sum) {
        if (detail.open) {
          sum.classList.add("rounded-t-[5px]");
          p.classList.add("rounded-b-[5px]");
        } else {
          sum.classList.remove("rounded-t-[5px]");
        }
      }
    },
  },
};
</script>