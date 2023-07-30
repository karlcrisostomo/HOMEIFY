<template>
  <div
    class="overflow-hidden container mx-auto"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div
      class="relative justify-center max-sm:max-w-xs sm:max-w-sm m-auto mt-20 md:max-w-md lg:max-w-xl lg:p-4 lg:mt-28 lg:mx-0"
    >
      <div
        class="text-2xl z-10 max-sm:text-2xl leading-loose sm:text-3x lg:text-5xl lg:leading-snug font-extralight"
      >
        <h1>Crafted Creations: A Gallery of Furniture Works and Projects</h1>
      </div>

      <div class="mt-6 lg:hidden text-center">
        <h1>"Click on the screen to see Images"</h1>
      </div>
      <div
        ref="ball"
        class="duration-75 cursor-pointer sm:max-w-lg mx-auto bg-white"
        :style="{ opacity: imageOpacity }"
      >
        <img
          class="z-0 delay-700 w-full"
          :src="currentImage.src"
          alt="Random Image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useFollowMouse } from "@/composables/customCursor";
const gallery = require.context("@/assets/images", false, /\.png$/);
// Sample random images (Replace these with your own image URLs)
const isMobile = ref(null);
const images = ref([
  { id: 1, src: gallery("./Coffee_Table.png") },
  { id: 2, src: gallery("./Dining_Sets.png") },
  { id: 3, src: gallery("./Kids_Furniture.png") },
  // Add more image URLs here
]);

const xPercent = -80;
const yPercent = -80;

// Use the composable with custom xPercent and yPercent
const { ball } = useFollowMouse(xPercent, yPercent);

// Method to get a random image from the images array
const getRandomImage = () => {
  return images.value[Math.floor(Math.random() * images.value.length)];
};

// Initial random image when the component is mounted
const currentImage = ref(getRandomImage());
const nextImage = ref(null);

// Function to update the nextImage with a delay
const updateRandomImage = () => {
  nextImage.value = getRandomImage();
};

// Watch for changes in nextImage and update currentImage after a short delay
watch(nextImage, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    setTimeout(() => {
      currentImage.value = newVal;
    }, 350); // 200ms delay before changing the image
  }
});

const imageOpacity = ref(0); // Set initial opacity to 0

const onMouseEnter = () => {
  imageOpacity.value = 1; // Set opacity to 1 on mouse enter
};

// Function to handle mouse leave event
const onMouseLeave = () => {
  imageOpacity.value = 0; // Set opacity to 0 on mouse leave
};

// Change the random image every 5 seconds
const intervalId = setInterval(updateRandomImage, 500); // Change image every 5 seconds

// Clear the interval when the component is unmounted
</script>
