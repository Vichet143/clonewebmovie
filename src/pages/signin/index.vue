<template>
  <a
    class="text-gray-500 transition font-[600] text-[15px] inline-block rounded-[5px] border-1 border-gray-600 w-[120px] p-[8px] dark:text-white"
    href="#"
    aria-haspopup="dialog"
    aria-expanded="false"
    aria-controls="hs-slide-up-animation-modal3"
    data-hs-overlay="#hs-slide-up-animation-modal3"
    ><i class="fa-solid fa-circle-user mx-[10px] text-[18px]"></i>
    Sign in
  </a>

  <div
    id="hs-slide-up-animation-modal3"
    class="hs-overlay fixed top-[3%] end-[1%] sm:end-[2%] z-80 overflow-x-hidden overflow-y-auto"
    role="dialog"
    tabindex="-1"
    aria-labelledby="hs-slide-up-animation-modal-label3"
  >
    <div
      class="hs-overlay-open:mt-7 max-w-[250px] hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
    >
      <div
        class="w-[160px] flex flex-col bg-white shadow-2xs rounded-[5px] pointer-events-auto"
        style="background-color: #424242"
      >
        <div class="flex justify-between items-center py-3 ">
          <div class="grid space-y-2">
            <a href="" class="text-white max-w-[160px] sm:max-w-[200px] px-[35px] py-[10px] flex items-center hover:bg-white/10 transition">
              <img src="../../img/google.png" alt="" class="w-[30px] mx-[-20px]" />
              <span class="mx-[40px] text-[14px] ">Google</span>
              
            </a>

            <a href="" class="text-white max-w-[160px] sm:max-w-[200px] px-[35px] py-[10px] flex items-center hover:bg-white/10 transition">
                <img src="../../img/facebook.png" alt="" class="w-[30px] mx-[-20px]">
                <span class="mx-[40px] text-[14px] ">Facebook</span>
              </a>
            <a href="" class="text-white max-w-[160px] sm:max-w-[200px] px-[35px] py-[10px] flex items-center hover:bg-white/10 transition">
                <img src="../../img/yahoo.png" alt="" class="w-[30px] mx-[-20px]">
                <span class="mx-[40px] text-[14px] ">Yahoo</span>
            </a>
            <a href="" class="text-white max-w-[160px] sm:max-w-[200px] px-[35px] py-[10px] flex items-center hover:bg-white/10 transition">
                <img src="../../img/microsoft.png" alt="" class="w-[30px] mx-[-20px]">
                <span class="mx-[40px] text-[14px] ">Microsoft</span>
                
              </a>
            <a href="" class="text-white max-w-[160px] sm:max-w-[200px] px-[35px] py-[10px] flex items-center hover:bg-white/10 transition">
                <img src="../../img/github.png" alt="" class="w-[30px] mx-[-20px]">
                <span class="mx-[40px] text-[14px] ">Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>