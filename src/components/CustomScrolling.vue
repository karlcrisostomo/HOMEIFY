<template>
  <div class=" w-full h-screen" ref="containerRef"></div>
</template>

<script>
import Scrollbar from "smooth-scrollbar";
import { onMounted, ref } from "vue";
name: "smoothScrollBar";
export default {
  setup() {
    const containerRef = ref(null);

    onMounted(() => {
      Scrollbar.init(containerRef.value);
    });

    return {
      containerRef,
    };
  },
};
</script>
