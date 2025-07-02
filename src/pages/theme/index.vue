<template>
  <a
    class="text-gray-500 transition p-[10px] font-[600] text-[15px] dark:text-white hidden lg:flex"
    href="#"
    aria-haspopup="dialog"
    aria-expanded="false"
    aria-controls="hs-slide-up-animation-modal"
    data-hs-overlay="#hs-slide-up-animation-modal"
    ><i class="fa-brands fa-buffer mx-[10px] text-[18px]"></i>
    Theme
  </a>
  <div
    id="hs-slide-up-animation-modal"
    class="hs-overlay fixed top-[3%] end-[19%] z-80 overflow-x-hidden overflow-y-auto"
    role="dialog"
    tabindex="-1"
    aria-labelledby="hs-slide-up-animation-modal-label"
  >
    <div
      class="hs-overlay-open:mt-7 w-[250px] hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
    >
      <div
        class="w-[250px] flex flex-col bg-white shadow-2xs rounded-[5px] pointer-events-auto"
        style="background-color: #424242"
      >
        <div class="flex justify-between items-center py-3 px-4">
          <div class="grid space-y-2">
            <label
              for="radio1"
              class="max-w-xs flex p-3 w-[220px] bg-faq rounded-[5px] text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <input
                @click="deep"
                type="radio"
                name="hs-vertical-radio-in-form"
                class="size-5 border-gray-200 text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                id="radio1"
              />
              <span class="text-sm text-white ms-3"
                >Deep Purple & Amber
                <i
                  class="fa-solid fa-gear ml-[5px] text-[18px] text-purple-600"
                ></i
              ></span>
            </label>
            <label
              for="radio2"
              class="max-w-xs flex p-3 w-[220px] bg-faq rounded-[5px] text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <input
                type="radio"
                name="hs-vertical-radio-in-form"
                class="shrink-0 size-5 border-gray-200 text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                id="radio2"
              />
              <span class="text-sm text-white ms-3"
                >Indigo & Pink
                <i
                  class="fa-solid fa-gear ml-[5px] text-[18px] text-blue-500"
                ></i
              ></span>
            </label>
            <label
              for="radio3"
              class="max-w-xs flex p-3 w-[220px] bg-faq rounded-[5px] text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <input
                type="radio"
                name="hs-vertical-radio-in-form"
                class="size-5 border-gray-200 text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                id="radio3"
              />
              <span class="text-sm text-white ms-3"
                >Pink & Blue-grey
                <i
                  class="fa-solid fa-gear ml-[5px] text-[18px] text-red-700"
                ></i
              ></span>
            </label>
            <label
              for="radio4"
              class="max-w-xs flex p-3 w-[220px] bg-faq rounded-[5px] text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <input
                @click="purple"
                type="radio"
                name="hs-vertical-radio-in-form"
                class="size-5 border-gray-200 text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                id="radio4"
              />
              <span class="text-sm text-white ms-3"
                >Purple & Green
                <i
                  class="fa-solid fa-gear ml-[5px] text-[18px] text-pink-500"
                ></i
              ></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>