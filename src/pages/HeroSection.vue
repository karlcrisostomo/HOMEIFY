<template>
  <section class="sm:h-4/5 md:h-full">
    <div
      v-motion-slide-right
      class="container mx-auto text-white p-4 translate-y-28"
    >
      <div v-motion-slide-visible-left :delay="600">
        <div
          class="max-sm:text-4xl max-sm:translate-y-16 max-sm:leading-snug tracking-wider h-80 font-thin sm:text-5.5xl sm:max-w-3xl sm:translate-y-12"
        >
          <h1>Experience the Difference</h1>
        </div>
      </div>

      <figure
        class="max-sm:mt-8"
        v-for="featureImg in featureImgs"
        :key="featureImg.id"
      >
        <div
          v-motion-slide-visible-bottom
          :delay="300"
          :class="{
            '  flex-row-reverse ':
              featureImg.id === featureImg2.id ||
              featureImg.id === featureImg4.id,
            '  sm:flex sm:p-0  sm:translate-y-8 md:translate-y-12 lg:mx-auto lg:translate-y-24 max-sm:mx-auto sm:mb-24  md:mb-28 lg:mb-48 sm:mt-6 md:mt-8 lg:mt-24  ': true,
          }"
        >
          <img
            class="max-sm:w-64 sm:w-72 md:w-80 md:h-80 lg:w-5/12 lg:h-full cursor-pointer rounded-custom"
            :src="featureImg.src"
            :alt="featureImg.alt"
          />

          <div
            class="sm:mx-6 sm:translate-y-0 md:translate-y-20 lg:max-w-lg lg:mx-auto"
          >
            <h1 class="sm:text-2xl font-bold mt-4 mb-4 text-Ash-Grey">
              {{ featureImg.title }}
            </h1>
            <p
              class="text-justify text-Baby-Blue sm:text-md lg:text-lg font-medium mb-6 leading-relaxed"
            >
              {{ featureImg.description }}
            </p>
          </div>
        </div>
      </figure>
    </div>
  </section>
</template>

<script src="@/composables/hero"></script>

<style></style>
