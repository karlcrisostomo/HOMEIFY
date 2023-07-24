<template>
  <div class="p-4 bg-Midnight-Plum">
    <div class="container mx-auto">
      <div
        v-motion-slide-visible-left
        :delay="600"
        class="text-white max-sm:leading-loose   relative top-16"
      >
        <h1 class="max-sm:text-4xl sm:text-5xl">Furniture Gallery</h1>
        <p class="font-thin">Discover the Epitome of Style</p>
      </div>

      <div class="w-full sm:grid sm:grid-cols-2 md:grid-cols-3 mt-40">
        <figure
          v-motion-fade-visible
          :delay="500"
          v-for="galleryImg in galleryImgs"
          :key="galleryImg.id"
          class="p-4 hover:cursor-pointer mx-auto  max-w-sm"
        >
          <div>
            <img
              :src="galleryImg.src"
              :alt="galleryImg.alt"
              class=" rounded-md mb-5 hover:scale-110 ease-in-out duration-500 sm:w-full md:w-96"
            />
          </div>

          <div class="">
            <span class="text-Ash-Grey text-2xl font-bold">{{
              galleryImg.title
            }}</span>
            <p
              class="text-Baby-Blue sm:text-md mb-4 font-medium leading-relaxed"
            >
              {{ galleryImg.description }}
            </p>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script src="../composables/gallery"></script>
