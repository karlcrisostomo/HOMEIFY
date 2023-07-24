<template>
  <div @click="scrollTop" v-show="visible" class="top-0 cursor-pointer">
    <img src="../assets/svgs/arrow-up.svg" alt="Scroll to Top" />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const visible = ref(false);
    let intervalId = null;

    const scrollTop = () => {
      intervalId = setInterval(() => {
        if (window.scrollY === 0) {
          clearInterval(intervalId);
        }
        window.scroll(0, window.scrollY - 50);
      }, 20);
    };

    const scrollListener = () => {
      visible.value = window.scrollY > 150;
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollListener);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", scrollListener);
    });

    return {
      visible,
      scrollTop,
    };
  },
};
</script>
