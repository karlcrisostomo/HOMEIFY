<template>
  <div
    class="relative overflow-hidden h-screen container mx-auto"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="h-screen flex border-red-400 border-2 p-2">
      <div class="text-2xl z-30">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          quae vero ratione!
        </h1>
      </div>
      <div
        ref="ball"
        class="duration-75 cursor-pointer absolute sm:max-w-lg mx-auto bg-white"
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
import { ref, onUnmounted, watch } from "vue";
import { useFollowMouse } from "@/composables/customCursor";
// Import the composable
const gallery = require.context("@/assets/images", false, /\.png$/);
// Sample random images (Replace these with your own image URLs)
const images = ref([
  { id: 1, src: gallery("./Coffee_Table.png") },
  { id: 2, src: gallery("./Dining_Sets.png") },
  { id: 3, src: gallery("./Kids_Furniture.png") },
  // Add more image URLs here
]);

const xPercent =  -80;
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
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
