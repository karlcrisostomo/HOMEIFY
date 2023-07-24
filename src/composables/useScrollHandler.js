import { ref, onMounted, onUnmounted } from "vue";

export function useScrollHandler() {
  const showBall = ref(false);

  const handleScroll = () => {
    const whyChooseUsElement = document.getElementById("why-choose-us");
    const containerRect = document.documentElement.getBoundingClientRect();
    const whyChooseUsRect = whyChooseUsElement?.getBoundingClientRect();

    if (
      whyChooseUsRect &&
      whyChooseUsRect.top >= containerRect.top &&
      whyChooseUsRect.bottom <= containerRect.bottom
    ) {
      showBall.value = true;
    } else {
      showBall.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { showBall };
}
