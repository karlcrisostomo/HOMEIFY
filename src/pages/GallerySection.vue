<template>
  <div class="p-4 bg-Midnight-Navy text-white ">
    <div class="container mx-auto max-sm:max-w-xs">
      <div class="relative top-20 text-base font-extralight">
        <h1>/ Furniture Collection</h1>
      </div>
      <div
        class="w-full sm:grid sm:grid-cols-2 md:grid-cols-3 mt-40 sm:gap-5 lg:gap-5 xl:gap-2"
      >
        <figure
          v-motion-fade-visible
          :delay="500"
          v-for="galleryImg in galleryImgs"
          :key="galleryImg.id"
          @mouseenter="hoveredImgs = galleryImg.id"
          @mouseleave="hoveredImgs = null"
          class="hover:cursor-pointer mx-auto max-w-sm"
        >
          <div class="bg-black relative mb-8 sm:text-sm overflow-hidden">
            <div
              class="relative hover:scale-110 transition-all ease-in-out duration-300 overflow-hidden w-full"
            >
              <img
                :src="galleryImg.src"
                :alt="galleryImg.alt"
                class="mb-5 sm:w-full md:w-96"
              />
            </div>

            <div class="p-4 max-sm:h-40 h-36">
              <div class="flex justify-between items-center">
                <span
                  class="max-sm:text-lg sm:text-base sm:p-4 md:p-2 lg:text-lg tracking-wider"
                  >{{ galleryImg.title }}</span
                >
                <div
                  v-if="hoveredImgs === galleryImg.id"
                  :class="{
                    ' animate-bounce ': galleryImg.id,
                  }"
                >
                  <img class="" src="../assets/svgs/arrow-right.svg" alt="" />
                </div>
              </div>
              <p
                class="max-sm:text-base max-sm:mt-6 sm:text-sm sm:p-4 md:p-2 lg:text-base leading-relaxed"
              >
                {{ galleryImg.description }}
              </p>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script src="../composables/gallery"></script>
