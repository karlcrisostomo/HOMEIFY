<template>
  <div
    class="bg-[url(../assets/images/works_bg.png)] bg-cover bg-center bg-no-repeat"
  >
    <div class="container mx-auto h-screen">
      <div
        class="relative top-1/2 max-sm:leading-snug max-sm:text-5xl bg-black/50 max-sm:max-w-xs mx-auto p-2 sm:max-w-md sm:text-5.5xl md:max-w-lg sm:top-1/3 lg:text-6xl lg:max-w-xl"
      >
        <h1 class="text-center font-bold font-Gupter tracking-wider">WELCOME TO HOMEIFY</h1>

        <div
          class="flex justify-center max-sm:text-base mt-4 sm:text-lg md:text-xl"
        >
          <span class="border-l-2 border-r-2 p-2" v-if="time">{{ time }}</span>
          <span v-else class="border-l-2 border-r-2 p-2"
            >The Date is Not Available</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import { computed, onMounted, ref } from "vue";

const time = ref(null);
const UpdateTime = () => {
  time.value = moment().format("YYYY-MM-DD");
};

onMounted(() => {
  UpdateTime;
  setInterval(UpdateTime, 1000);
});
</script>
