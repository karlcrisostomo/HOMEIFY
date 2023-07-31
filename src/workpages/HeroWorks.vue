<template>
  <div class="h-screen">
    <div class="">
      <div
        class="uppercase max-sm:text-3xl font-extralight max-sm:max-w-sm max-sm:mx-auto max-sm:leading-snug"
      >
        <h1 class="max-sm:mt-20 text-center tracking-wider">
          Craftmanship and quality
        </h1>

        <div class="text-base mt-20 leading-loose tracking-wide text-justify">
          <p>
            With a fusion of expert craftsmanship and premium materials, our
            dedication lies in designing elegant furniture that transcends
            trends and withstands the test of time.
          </p>
        </div>

        <div
          class="max-sm:p-4 md:grid md:grid-cols-2  sm:grid-flow-dens  mt-12  md:max-w-2xl md:gap-10 md:mx-auto xl:max-w-4xl xl:gap-24 xl:mx-auto"
        >
          <figure
            v-for="fwImage in fwImages"
            :key="fwImage.id"
            class="  sm:max-w-sm mx-auto "
            :class="{ ' pt-32': fwImage.id === 2 }"
          >
            <div class=" lg:max-w-sm mx-auto ">
              <img class="w-full h-1/2" :src="fwImage.src" alt="" />

              <div class="text-base mt-4 max-sm:max-w-xs mx-auto mb-6">
                <h1 class="font-medium max-sm:text-base">
                  {{ fwImage.title }}
                </h1>
                <p
                  class="mt-7 font-medium max-sm:text-sm tracking-wide max-sm:leading-relaxed text-Ash-Grey text-justify"
                >
                  {{ fwImage.desciption }}
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const images = require.context("@/assets/images", false, /\.jpg$/);

const fwImages = ref([
  {
    id: 1,
    src: images("./ftw_1.jpg"),
    title: "AWARD-WINNING DESIGNERS",
    desciption:
      "HOMEIFY prioritizes quality with carefully sourced materials from worldwide,  focusing on fine leather, wood, and steel, and meticulous attention to detail.",
  },
  {
    id: 2,
    src: images("./ftw_2.jpg"),
    title: "THE COMPLETE EXPERIENCE",
    desciption:
      "HOMEIFY's quality begins with careful material selection from worldwide sources, emphasizing exceptional raw materials and meticulous attention to detail.",
  },
  {
    id: 3,
    src: images("./ftw_3.jpg"),
    title: "SKILLED & EXPERIENCED CRAFTSMEN",
    desciption:
      "HOMEIFY's skilled craftsmen, trained and experienced, embark on their work.",
  },
]);
</script>
