import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { Draggable, InertiaPlugin } from 'gsap/Draggable';

export function useSlider() {
  gsap.registerPlugin(Draggable, InertiaPlugin);

  const slideDelay = 1.5;
  const slideDuration = 0.3;
  const wrap = true;
  const slides = ref([]);
  const prevButton = ref(null);
  const nextButton = ref(null);
  const progressWrap = gsap.utils.wrap(0, 1);

  const numSlides = ref(0);

  const wrapX = gsap.utils.wrap(-100, (numSlides.value - 1) * 100);
  let timer = null;

  let animation = null;

  let proxy = null;
  let slideAnimation = null;
  let slideWidth = 0;
  let wrapWidth = 0;

  let draggable = null;

  function initializeSlider() {
    slides.value = Array.from(document.querySelectorAll('.slide'));
    numSlides.value = slides.value.length;

    gsap.set(slides.value, {
      backgroundColor: gsap.utils.random(['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'lime', 'pink']),
      xPercent: (i) => i * 100,
    });

    timer = gsap.delayedCall(slideDelay, autoPlay);

    animation = gsap.to(slides.value, {
      xPercent: `+=${numSlides.value * 100}`,
      duration: 1,
      ease: 'none',
      paused: true,
      repeat: -1,
      modifiers: {
        xPercent: wrapX,
      },
    });

    proxy = document.createElement('div');
    slideAnimation = gsap.to({}, {});
    slideWidth = 0;
    wrapWidth = 0;

    draggable = new Draggable(proxy, {
      trigger: '.slides-container',
      inertia: true,
      onPress: updateDraggable,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX,
      },
    });

    resize();
    window.addEventListener('resize', resize);

    prevButton.value.addEventListener('click', () => {
      animateSlides(1);
    });

    nextButton.value.addEventListener('click', () => {
      animateSlides(-1);
    });
  }

  function updateDraggable() {
    timer.restart(true);
    slideAnimation.kill();
    draggable.update();
  }

  function animateSlides(direction) {
    timer.restart(true);
    slideAnimation.kill();
    const x = snapX(gsap.getProperty(proxy, 'x') + direction * slideWidth);

    slideAnimation = gsap.to(proxy, {
      x,
      duration: slideDuration,
      onUpdate: updateProgress,
    });
  }

  function autoPlay() {
    if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
      timer.restart(true);
    } else {
      animateSlides(-1);
    }
  }

  function updateProgress() {
    animation.progress(progressWrap(gsap.getProperty(proxy, 'x') / wrapWidth));
  }

  function snapX(value) {
    const snapped = gsap.utils.snap(slideWidth, value);
    return wrap ? snapped : gsap.utils.clamp(-slideWidth * (numSlides.value - 1), 0, snapped);
  }

  function resize() {
    const norm = (gsap.getProperty(proxy, 'x') / wrapWidth) || 0;

    if (slides.value.length === 0 || typeof slides.value[0].offsetWidth === 'undefined') {
      return;
    }

    slideWidth = slides.value[0].offsetWidth;
    wrapWidth = slideWidth * numSlides.value;

    wrap || draggable.applyBounds({ minX: -slideWidth * (numSlides.value - 1), maxX: 0 });

    gsap.set(proxy, {
      x: norm * wrapWidth,
    });

    animateSlides(0);
    slideAnimation.progress(1);
  }

  onMounted(() => {
    initializeSlider();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resize);
  });

  return {
    slides,
    prevButton,
    nextButton,
  };
}
