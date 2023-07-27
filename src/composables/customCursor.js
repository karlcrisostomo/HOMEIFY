import { ref, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";

export function useFollowMouse(xPercent = -50, yPercent = -50) {
  const ball = ref(null);
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;
  let animation;

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);

    nextTick(() => {
      gsap.set(ball.value, { xPercent, yPercent });

      animation = gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;

        gsap.set(ball.value, { x: pos.x, y: pos.y });
      });
    });
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    if (animation) {
      gsap.ticker.remove(animation);
    }
  });

  return {
    ball,
  };
}
