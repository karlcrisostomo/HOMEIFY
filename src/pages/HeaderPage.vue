<template>
  <div class="text-white h-screen relative">
    <div class="container mx-auto">
      <Navigation />

      <div class="absolute w-full h-full top-0 left-0 z-0">
        <div
          v-motion-slide-left
          :delay="700"
          class="flex justify-center top-64 z-10"
        >
          <div class="absolute top-64 max-sm:max-w-sm max-sm:p-3">
            <p
              class="max-sm:text-3xl  max-sm:font-light sm:font-extralight max-sm:leading-10 sm:max-w-lg sm:text-5xl sm:leading-snug md:max-w-xl md:p-4 lg:relative lg:-left-36 lg:max-w-2xl xl:max-w-4xl xl:leading-relaxed xl:text-5.5xl"
            >
              Elevate Your Living Space with Timeless Furnishings and Unmatched
              Services
            </p>
          </div>
        </div>

        <div>
          <video autoplay muted loop class="  w-screen h-screen object-cover">
            <source src="../assets/video/Homeify_Vid.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../composables/header"></script>
