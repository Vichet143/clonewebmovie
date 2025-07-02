<template>
  <router-link
    class="text-gray-500 transition pr-[16px] p-[10px] font-[600] text-[15px] dark:text-white hidden lg:flex"
    to="/404"
    aria-haspopup="dialog"
    aria-expanded="false"
    aria-controls="hs-scale-animation-modal"
    data-hs-overlay="#hs-scale-animation-modal"
    ><i class="fa-brands fa-stack-exchange mx-[10px] text-[18px]"></i>
    Request Drama
  </router-link>
  <div
    id="hs-scale-animation-modal"
    class="hs-overlay hidden size-full fixed top-0 left-[0px] z-80 overflow-x-hidden overflow-y-auto pointer-events-none bg-resquest"
    role="dialog"
    tabindex="-1"
    aria-labelledby="hs-scale-animation-modal-label"
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
            <span class="text-blue-500">Request Drama</span> Or
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
            class="ciconfaq py-[10px] px-[32px] rounded-[5px] text-white"
          >
            Facebook
            <i class="fa-brands fa-facebook-f ml-[10px]"></i>
          </a>
          <a
            href=""
            class="bg-blue-700 py-[10px] px-[32px] rounded-[5px] text-white"
          >
            Messanger
            <i class="fa-brands fa-facebook-messenger ml-[10px]"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>