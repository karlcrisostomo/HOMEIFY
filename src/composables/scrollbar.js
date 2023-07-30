import Scrollbar from "smooth-scrollbar";

import { onMounted, ref } from "vue";

export const containerRef = ref(null);

export const customScrollbar = () => {
  onMounted(() => {
    Scrollbar.init(containerRef.value, { damping: 0.02 });
  });

  return { containerRef };
};
