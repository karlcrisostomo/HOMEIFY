<template>
  <div class=" h-screen    ">
    <div class="absolute w-full h-full top-0 left-0 ">
      <div class="flex justify-center">
        <div
          class="max-sm:text-5xl max-sm:max-w-sm absolute  max-sm:top-1/4 sm:top-72 sm:text-6xl sm:max-w-lg lg:text-8xl lg:max-w-xl sm:leading-none"
        >
          <h1 class="text-center font-bold font-Gupter">WELCOME TO HOMEIFY</h1>

          <div
            class="flex justify-center max-sm:text-xl mt-4 sm:text-lg md:text-xl"
          >
            <span class="border-l-2 border-r-2 p-2" v-if="time">{{
              time
            }}</span>
            <span v-else class="border-l-2 border-r-2 p-2"
              >The Date is Not Available</span
            >
          </div>
        </div>
      </div>

      <div>
        <img
          class="w-full h-full object-cover bg-fixed"
          src="../assets/images/works_bg.png"
          alt="background"
        />
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
