<template>
    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
</template>


<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'App',
  setup() {
    const xChild = ref(0);
    const yChild = ref(0);
    const xParent = ref(0);
    const yParent = ref(0);
    const hover = ref(false);
    const hideCursor = ref(true);

    const cursorCircle = computed(() => {
      return `transform: translateX(${xParent.value}px) translateY(${yParent.value}px) translateZ(0) translate3d(0, 0, 0);`;
    });

    const cursorPoint = computed(() => {
      return `transform: translateX(${xChild.value - 3}px) translateY(${yChild.value - 3}px) translateZ(0) translate3d(0, 0, 0);`;
    });

    const moveCursor = (e) => {
      xChild.value = e.clientX;
      yChild.value = e.clientY;
      setTimeout(() => {
        xParent.value = e.clientX - 15;
        yParent.value = e.clientY - 15;
      }, 100);
    };

    onMounted(() => {
      document.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseleave', () => {
        hideCursor.value = true;
      });
      document.addEventListener('mouseenter', () => {
        hideCursor.value = false;
      });
    });

    onBeforeUnmount(() => {
      document.removeEventListener('mousemove', moveCursor);
    });

    return {
      xChild,
      yChild,
      xParent,
      yParent,
      hover,
      hideCursor,
      cursorCircle,
      cursorPoint,
    };
  },
};
</script>


<style scoped>
body, html {
  width: 100%;
  height: 100%;
  background: #000;
  margin: 0;
  cursor: none;
  display: flex;
  justify-content: center;
  align-items:  center;
}
.g-cursor {

    &_hide {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: width .6s ease,
        height .6s ease,
        opacity .6s ease;
    }

    &__circle {
      pointer-events: none;
      user-select: none;
      top: 0;
      left: 0;
      position: fixed;
      width: 30px;
      height: 30px;
      border: 2px solid #fff;
      border-radius: 100%;
      z-index: 5555;
      backface-visibility: hidden;
      transition: opacity .6s ease;
    }

    &__point {
      top: 0;
      left: 0;
      position: fixed;
      width: 10px;
      height: 10px;
      pointer-events: none;
      user-select: none;
      border-radius: 100%;
      background: #fff;
      z-index: 55555555;
      backface-visibility: hidden;
      will-change: transform;
    }

    &_hover {
      .g-cursor__circle {
        opacity: 0;
        width: 60px;
        height: 60px;
        transition: width .6s ease,
          height .6s ease,
          opacity .6s ease;
      }
    }
  }
</style>