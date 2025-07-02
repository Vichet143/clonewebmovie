<template>
  <header class="bg-white dark:bg-gray-950 sticky top-0 z-[111]">
    <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 flex items-center md:gap-12">
          <!-- Navigation Toggle -->
          <div class="lg:hidden text-center">
            <button
              type="button"
              class="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-gray-950 focus:outline-hidden focus:bg-gray-900"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-sidebar-offcanvas"
              aria-label="Toggle"
              data-hs-overlay="#hs-sidebar-offcanvas"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                class="block lg:hidden"
              >
                <title>menu-8-3</title>
                <g fill="#FFFFFF" stroke-linejoin="miter" stroke-linecap="butt">
                  <line
                    x1="2"
                    y1="16"
                    x2="30"
                    y2="16"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></line>
                  <line
                    x1="2"
                    y1="7"
                    x2="30"
                    y2="7"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></line>
                  <line
                    x1="2"
                    y1="25"
                    x2="30"
                    y2="25"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></line>
                </g>
              </svg>
            </button>
          </div>
          <!-- End Navigation Toggle -->

          <!-- Sidebar -->
          <div
            id="hs-sidebar-offcanvas"
            class="hs-overlay [--auto-close:lg] lg:translate-x-0 lg:end-auto lg:bottom-0 w-[50%] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 z-60 sizebar dark:bg-neutral-800 dark:border-neutral-700 bg-white"
            role="dialog"
            tabindex="-1"
            aria-label="Sidebar"
          >
            <div class="relative flex flex-col h-full max-h-full">
              <!-- Header -->
              <header class="p-4 flex justify-between items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  class="block lg:hidden"
                  data-hs-overlay="#hs-sidebar-offcanvas"
                >
                  <title>menu-8-3</title>
                  <g
                    fill="#FFFFFF"
                    stroke-linejoin="miter"
                    stroke-linecap="butt"
                  >
                    <line
                      x1="2"
                      y1="16"
                      x2="30"
                      y2="16"
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    ></line>
                    <line
                      x1="2"
                      y1="7"
                      x2="30"
                      y2="7"
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    ></line>
                    <line
                      x1="2"
                      y1="25"
                      x2="30"
                      y2="25"
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    ></line>
                  </g>
                </svg>
                <a
                  class="block text-teal-600 dark:text-teal-300 ml-[-11px] sm:ml-[-10px] md:ml-[-60px] lg:ml-[0px]"
                  href="#"
                >
                  <span class="sr-only">Home</span>
                  <img class="w-[130px]" src="/src/img/logo.png" alt="" />
                </a>
              </header>
              <div class="w-[100%] border-1 border-gray-500 mb-[10px]"></div>
              <!-- End Header -->
              <!-- Body -->
              <nav
                class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
              >
                <div
                  class="hs-accordion-group pb-0 px-2 w-full flex flex-col flex-wrap"
                  data-hs-accordion-always-open
                >
                  <ul class="space-y-1">
                    <li class="hs-accordion" id="account-accordion">
                      <router-link
                        class="text-gray-500 transition pr-[16px] p-[10px] font-[600] text-[15px] dark:text-white block"
                        to="/"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="hs-sidebar-offcanvas"
                        aria-label="Toggle"
                        data-hs-overlay="#hs-sidebar-offcanvas"
                        ><i class="fa-solid fa-house mx-[10px] text-[18px]"></i>
                        Home
                      </router-link>
                    </li>

                    <li class="hs-accordion" id="account-accordion">
                      <router-link
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="hs-sidebar-offcanvas"
                        aria-label="Toggle"
                        data-hs-overlay="#hs-sidebar-offcanvas"
                        class="text-gray-500 block transition pr-[16px] p-[10px] font-[600] text-[15px] dark:text-white"
                        to="/faq"
                        ><i
                          class="fa-solid fa-message mx-[10px] text-[18px]"
                        ></i>
                        FAQ
                      </router-link>
                    </li>

                    <li class="hs-accordion" id="account-accordion">
                      <router-link
                        class="text-gray-500 block transition pr-[16px] p-[10px] font-[600] text-[15px] dark:text-white"
                        to="/requestdrama"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="hs-sidebar-offcanvas2"
                        aria-label="Toggle"
                        data-hs-overlay="#hs-sidebar-offcanvas2"
                        ><i
                          class="fa-brands fa-stack-exchange mx-[10px] text-[18px]"
                        ></i>
                        Request Drama
                      </router-link>
                    </li>

                    <!-- Trigger -->
                    <li class="hs-accordion" id="projects-accordion">
                      <div
                        to="/theme"
                        class="text-gray-500 block transition p-[10px] font-[600] text-[15px] dark:text-white"
                        style="cursor: pointer"
                        href="#"
                        @click.prevent="handleshowtheme"
                      >
                        <i
                          class="fa-brands fa-buffer mx-[10px] text-[18px]"
                        ></i>
                        Theme
                      </div>
                    </li>
                    <!-- Modal - place outside the <li> -->
                    <div
                      class="hs-overlay fixed top-[27%] end-[17%] z-80 overflow-x-hidden overflow-y-auto"
                      v-if="showtheme"
                    >
                      <div
                        class="hs-overlay-open:mt-7 w-[250px] hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
                      >
                        <div
                          class="w-[250px] flex flex-col bg-white shadow-2xs rounded-[5px] pointer-events-auto"
                          style="background-color: #424242"
                        >
                          <div
                            class="flex justify-between items-center py-3 px-4"
                          >
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

                    <li class="hs-accordion" id="projects-accordion">
                      <router-link
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="hs-sidebar-offcanvas"
                        aria-label="Toggle"
                        data-hs-overlay="#hs-sidebar-offcanvas"
                        class="text-gray-500 block transition pr-[16px] p-[10px] font-[600] text-[15px] dark:text-white"
                        to="/explore"
                        ><i
                          class="fa-brands fa-leanpub mx-[10px] text-[18px]"
                        ></i>
                        Explore
                      </router-link>
                    </li>
                  </ul>
                </div>
              </nav>
              <!-- End Body -->
            </div>
          </div>
          <!-- End Sidebar -->

          <div
            id="hs-sidebar-offcanvas2"
            class="hs-overlay hidden size-full fixed top-0 left-[0px] z-80 overflow-x-hidden overflow-y-auto pointer-events-none bg-resquest"
          >
            <div
              class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center text-center"
            >
              <div
                class="w-[350px] fixed top-[40%] left-[15%] flex flex-col justify-center border-gray-200 shadow-2xs rounded-[5px] pointer-events-auto"
                style="background-color: #424242"
              >
                <div class="flex justify-between items-center py-3 px-4">
                  <h3
                    id="hs-scale-animation-modal-label"
                    class="font-bold text-[25px] text-white"
                  >
                    Chat with us
                  </h3>
                  <button
                    type="button"
                    class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-500 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                    aria-label="Close"
                    data-hs-overlay="#hs-scale-animation-modal"
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
                <div class="p-4 overflow-y-auto">
                  <p class="mt-1 text-white">
                    You can
                    <span class="text-blue-500">Request Drama</span>
                    Or
                    <span class="text-red-500">Report A Problem</span>
                  </p>
                  <p
                    class="text-white border-[1px] border-gray-500 py-2 rounded-[5px] bg-linkres mt-2 relative"
                  >
                    https://t.kisskh.id/R7Z9<i
                      class="fa-solid fa-paperclip absolute left-[90%] bottom-[25%]"
                    ></i>
                  </p>
                </div>
                <div class="flex items-center gap-x-2 py-3 px-4">
                  <a
                    href=""
                    class="ciconfaq py-[10px] px-[32px] rounded-[5px] text-white flex items-center"
                  >
                    Facebook
                    <i class="fa-brands fa-facebook-f ml-[10px]"></i>
                  </a>
                  <a
                    href=""
                    class="bg-blue-700 py-[10px] px-[32px] rounded-[5px] text-white flex items-center"
                  >
                    Messanger
                    <i class="fa-brands fa-facebook-messenger ml-[10px]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            class="block text-teal-600 dark:text-teal-300 ml-[-11px] sm:ml-[-10px] md:ml-[-60px] lg:ml-[0px]"
            href="#"
          >
            <span class="sr-only">Home</span>
            <img class="w-[130px]" src="/src/img/logo.png" alt="" />
          </a>
        </div>

        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="">
            <ul class="flex items-center text-sm">
              <li class="">
                <router-link
                  class="text-gray-500 transition pr-[16px] p-[10px] font-[600] text-[15px] dark:text-white hidden lg:flex"
                  to="/"
                  ><i class="fa-solid fa-house mx-[10px] text-[18px]"></i>
                  Home
                </router-link>
              </li>

              <li class="">
                <router-link
                  class="text-gray-500 transition pr-[16px] p-[10px] font-[600] text-[15px] dark:text-white hidden lg:flex"
                  to="/faq"
                  ><i class="fa-solid fa-message mx-[10px] text-[18px]"></i>
                  FAQ
                </router-link>
              </li>

              <li class="">
                <Requestdrama></Requestdrama>
              </li>
              <li class="">
                <Theme></Theme>
              </li>
              <li class="">
                <router-link
                  class="text-gray-500 transition pr-[16px] p-[10px] font-[600] text-[15px] dark:text-white hidden lg:flex"
                  to="/explore"
                  ><i class="fa-brands fa-leanpub mx-[10px] text-[18px]"></i>
                  Explore
                </router-link>
              </li>

              <li class="">
                <Search></Search>
              </li>
              <li class="">
                <Signin></Signin>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { deep } from "../js/navbarchangecolor";
import { purple } from "../js/purple";
import Requestdrama from "../pages/requestdrama/index.vue";
import Search from "../pages/search/index.vue";
import Signin from "../pages/signin/index.vue";
import Theme from "../pages/theme/index.vue";

export default {
  data() {
    return {
      showtheme: false,
    };
  },
  methods: {
    deep,
    purple,
    handleshowtheme() {
      this.showtheme = !this.showtheme;
    },
  },
  components: {
    Search,
    Signin,
    Theme,
    Requestdrama,
  },
};
</script>
