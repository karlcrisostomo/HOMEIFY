<template>
  <div class="h-screen">
    <div class="">
      <div class="max-sm:text-3xl font-light max-sm:mx-auto overflow-hidden">
        <div
          v-motion-slide-visible-right
          :delay="500"
          class="max-sm:max-w-sm p-6 tracking-wider sm:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto"
        >
          <h1 class="mt-36 font-extralight uppercase max-sm:text-sm">
            / Expertise
          </h1>
          <p
            class="max-sm:text-3xl font-extralight mt-4 sm:text-5xl sm:leading-snug lg:text-5xl lg:leading-relaxed xl:leading-snug tracking-wider lg:max-w-3xl xl:max-w-xl mb-28"
          >
            Discover Elegant Furniture for Your Stunning Home
          </p>
        </div>

        <div>
          <div
            v-motion-slide-visible-left
            :delay="500"
            class="text-base mt-20 leading-loose tracking-wide text-justify bg-[url(../assets/images/feature2_bg.jpg)] bg-no-repeat bg-cover h-screen bg-center lg:w-4/5"
          />

          <p
            v-motion-slide-visible-right
            :delay="500"
            class="font-extralight max-sm:p-10 sm:p-6 max-sm:max-w-xs sm:max-w-sm sm:text-2xl mx-auto mt-40 max-sm:text-lg max-sm:leading-relaxed tracking-wide md:relative md:-right-44 lg:max-w-md sm:leading-relaxed lg:leading-relaxed xl:max-w-xl lg:text-3xl"
          >
            Crafted with expertise and premium materials, our elegant furniture
            defies trends and endures time.
          </p>
        </div>

        <div
          v-motion-fade-visible
          :delay="500"
          class="max-sm:p-10 md:grid md:grid-cols-2 sm:grid-flow-dens pt-44 md:max-w-2xl md:gap-16 md:mx-auto xl:max-w-4xl xl:gap-30 xl:mx-auto"
        >
          <figure
            v-for="fwImage in fwImages"
            :key="fwImage.id"
            class="sm:max-w-sm mx-auto"
            :class="{ ' md:mt-44': fwImage.id === 2 || fwImage.id === 4 }"
          >
            <div class="max-sm:max-w-xs mx-auto">
              <img class="w-full h-1/2" :src="fwImage.src" alt="" />

              <div class="text-base mt-4 max-sm:max-w-xs mx-auto mb-32">
                <h1
                  class="font-extralight max-sm:text-xs flex items-center sm:text-base md:flex-1 md:w-80"
                >
                  {{ fwImage.title }}

                  <span class="ml-5 w-32 h-0.5 block bg-gray-300"></span>
                </h1>

                <h1
                  class="font-extralight tracking-wider leading-loose mt-4 text-xl sm:text-2xl"
                >
                  {{ fwImage.subheading }}
                </h1>
                <p
                  class="mt-7 font-medium max-sm:text-base sm:text-xl tracking-wide max-sm:leading-relaxed text-Ash-Grey lg:font-normal xl:leading-loose xl:tracking-wider"
                >
                  {{ fwImage.desciption }}
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <section>
      <FooterSection />
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FooterSection from "@/pages/FooterSection.vue";
const images = require.context("@/assets/images", false, /\.jpg$/);

const fwImages = ref([
  {
    id: 1,
    src: images("./ftw_1.jpg"),
    title: "Quality Matters",
    subheading:
      "Exquisite craftsmanship, global-sourced materials: HOMEIFY's quality",
    desciption:
      "Handpicked premium brands, exceptional craftsmanship, innovative designs.",
  },
  {
    id: 2,
    src: images("./ftw_2.jpg"),
    title: "Seamless Shopping",
    subheading: "Effortless Shopping: Smooth Retail Experience",
    desciption:
      "Winning strategies, delightful experience, from sourcing to delivery.",
  },
  {
    id: 3,
    src: images("./ftw_3.jpg"),
    title: "Crafted to Perfection",
    subheading: "Masterful Artistry and Precision",
    desciption:
      " Intricate craftsmanship, unmatched durability, elegant and functional.",
  },
  {
    id: 4,
    src: images("./ftw_3.jpg"),
    title: "Personalized Style",
    subheading: "Uniquely Crafted for You",
    desciption:
      " Recommendations for modern, classic, minimalist, or eclectic preferences.",
  },
  {
    id: 5,
    src: images("./ftw_3.jpg"),
    title: "Your Satisfaction",
    subheading: "Crafted for Unmatched Delight",
    desciption:
      " Customer-centric approach, delighted with your perfect furniture piece.",
  },
]);
</script>
