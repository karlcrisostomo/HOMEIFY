<template>
  <div class="text-white p-2 mb-20">
    <div
      class="font-extralight max-sm:text-3xl sm:text-4xl md:text-5xl max-sm:p-2 sm:max-w-lg md:max-w-full sm:p-4 xl:max-w-5xl xl:mx-auto"
    >
      <h1 class="mt-32">Experience the Difference</h1>
      <div class="mb-12">
        <span class="uppercase max-sm:text-sm sm:text-base font-extralight"
          >/ furniture gallery</span
        >
      </div>
    </div>
    <Swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="slidesPerView"
      :loop="true"
      :centered-slides="true"
      :grab-cursor="true"
      :space-between="10"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide class="xl:mt-24" v-for="image in images" :key="image.id">
        <div
          class="mx-auto w-full max-sm:p-4 max-sm:max-w-sm sm:max-w-md sm:p-2 md:max-w-lg lg:max-w-xl xl:max-w-6xl"
        >
          <img class="max-sm:h-80 rounded-lg" :src="image.src" alt="" />
          <div
            class="max-sm:pt-7font-light max-sm:mb-9 sm:pt-10 sm:mb-11 md:mb-16 sm:max-w-sm md:max-w-md lg:mx-auto xl:max-w-3xl"
          >
            <div class="max-sm:text-2xl flex items-center sm:text-xl font-thin">
              <span class="hidden sm:block sm:text-sm mr-2"
                >/0{{ image.id }}</span
              >
              <h1>{{ image.title }}</h1>
            </div>
            <div
              class="font-thin max-sm:pt-10 max-sm:max-w-sm text-justify max-sm:text-sm sm:pt-12 md:text-lg mx-auto"
            >
              <p class="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {{ image.description }}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const photos = require.context("@/assets/carousel_images", false, /\.png$/);

const images = ref([
  {
    id: 1,
    src: photos("./slide_1.png"),
    title: "Harmony Haven Sofa",
    description:
      "Sink into ultimate comfort with the luxurious velvet upholstered sofa featuring a classic silhouette and sturdy hardwood frame for years of relaxation",
  },
  {
    id: 2,
    src: photos("./slide_2.png"),
    title: "Enchanta Oak Dining Set",
    description:
      "Elevate your dining experience with this timeless masterpiece, showcasing intricate hand-carved accents and an extendable table for versatile gatherings.",
  },
  {
    id: 3,
    src: photos("./slide_3.png"),
    title: "Serene Sleeps King Bed",
    description:
      "Transform your bedroom into a serene sanctuary with this plush upholstered bed featuring a majestic button-tufted headboard and solid wood frame.",
  },
  {
    id: 4,
    src: photos("./slide_4.png"),
    title: "EcoChic Reclaimed Bookshelf",
    description:
      "Embrace sustainability and artistic charm with this one-of-a-kind bookshelf crafted from reclaimed wood, adding a touch of eco-consciousness to your decor.",
  },
  {
    id: 5,
    src: photos("./slide_5.png"),
    title: "Artisan Haven Writing Desk",
    description:
      "Find inspiration at this beautifully crafted walnut writing desk, boasting intricate detailing, spacious work surface, and vintage allure.",
  },
]);

const slidesPerView = ref(2);
onMounted(() => {
  // Function to update the slidesPerView value based on the screen size
  const updateSlidesPerView = () => {
    if (window.matchMedia("(max-width: 639px)").matches) {
      slidesPerView.value = 1; // For small screens (max-width: 768px), show 1 slide per view
    } else {
      slidesPerView.value = 2; // For larger screens, show 3 slides per view (your initial value)
    }
  };

  updateSlidesPerView();

  window.addEventListener("resize", updateSlidesPerView);
});
</script>

<style>
.swiper-pagination-bullet {
  background-color: white;
}

.swiper-slide img {
  width: 100%;
  transition: all 0.25s ease-out;
  transform: scale(0.6);
  transition: all 0.3s ease-out;
  transform-origin: center;
}

.swiper-slide-prev {
  filter: grayscale(80);
  filter: blur(2px);
}
.swiper-slide-next {
  filter: grayscale(80);
  filter: blur(2px);
}

.swiper-slide-active img {
  transform: scale(1);
  width: 100%;
}

@media screen and (min-width: 639px) {
  .swiper-slide img {
    height: 350px;
  }
}

@media screen and (min-width: 1024px) {
  .swiper-slide img {
    height: 500px;
  }
}

@media screen and(min-width:640px) {
  .swiper-slide-active img {
    width: 50%;
  }
}
</style>
