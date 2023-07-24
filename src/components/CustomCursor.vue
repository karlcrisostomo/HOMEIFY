<template>
  <div
    :class="{
      ' w-8 h-8 fixed top-0 left-0 border-2 border-white border-solid rounded-full z-50 pointer-events-none':
        !isMenuOpen,
      'w-8 h-8 fixed top-0 left-0 border-2  border-solid rounded-full z-50 pointer-events-none border-black':
        isMenuOpen,
    }"
    ref="ball"
  ></div>
</template>

<script>
import { isMenuOpen } from "@/composables/menu";
import { ref, onMounted,} from "vue";
import gsap from "gsap";

export function useFollowMouse() {
  const ball = ref(null);
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);

    gsap.set(ball.value, { xPercent: -50, yPercent: -50 });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      gsap.set(ball.value, { x: pos.x, y: pos.y });
    });
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
  });

  return {
    ball,
  };
}



</script>
