<template>
  <div class="text-white container mx-auto relative top-28  p-2 h-screen">
    <div class="mb-32 font-thin max-sm:text-2xl max-sm:p-2 max-sm:text-center sm:text-4xl sm:text-center md:text-5xl md:text-center xl:text-left xl:max-w-2xl xl:ml-20 ">
      <h1>Experience the Difference</h1>
    </div>
    <Swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="slidesPerView"
      :loop="true"
      :centered-slides="true"
      :grab-cursor="true"
      :space-between="50"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide class="xl:mt-24" v-for="image in images" :key="image.id">
        <div
          class="mx-auto max-sm:w-full max-sm:p-4 max-sm:max-w-lg sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-none"
        >
          <img class="max-sm:h-96 rounded-lg" :src="image.src" alt="" />
          <div
            class="max-sm:pt-7 font-light max-sm:mb-9 sm:pt-10 sm:mb-11 md:mb-16"
          >
            <div
              class="max-sm:text-2xl flex justify-evenly items-center sm:text-2xl  font-thin lg:max-w-md"
            >
              <span class="hidden  sm:block sm:text-sm ">/0{{ image.id }}</span>
              <h1>{{ image.title }}</h1>
            </div>
            <div
              class="font-thin max-sm:pt-10 text-justify max-sm:text-sm sm:pt-12 md:text-lg lg:max-w-lg xl:max-w-xl mx-auto"
            >
              <p>{{ image.description }}</p>
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
const photos = require.context("@/assets/images", false, /\.png$/);

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
    src: photos("./slide_3.png"),
    title: "EcoChic Reclaimed Bookshelf",
    description:
      "Embrace sustainability and artistic charm with this one-of-a-kind bookshelf crafted from reclaimed wood, adding a touch of eco-consciousness to your decor.",
  },
  {
    id: 5,
    src: photos("./slide_3.png"),
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
</style>
