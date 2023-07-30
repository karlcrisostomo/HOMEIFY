<template>
  <section>
    <div :class="{ 'w-screen h-screen ': !isMenuOpen }" ref="containerRef">
      <component :is="HeaderPage" />
      <component :is="CarouselSection" />
      <component :is="GallerySection" />
      <component :is="TestimonialSection" />
      <component :is="WhyChooseUs" />
      <component :is="FooterSection" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";
import { isMenuOpen } from "../composables/menu";
import { customScrollbar } from "../composables/scrollbar";

const { containerRef } = customScrollbar();
// Define async components using `defineAsyncComponent`.
const HeaderPage = defineAsyncComponent(() => import("@/pages/HeaderPage"));
const CarouselSection = defineAsyncComponent(() =>
  import("@/pages/CarouselSection.vue")
);
const TestimonialSection = defineAsyncComponent(() =>
  import("@/pages/TestimonialSection.vue")
);
const WhyChooseUs = defineAsyncComponent(() =>
  import("@/pages/WhyChooseUs.vue")
);
const FooterSection = defineAsyncComponent(() =>
  import("@/pages/FooterSection.vue")
);
const GallerySection = defineAsyncComponent(() =>
  import("@/pages/GallerySection.vue")
);

// The `onMounted` hook is used to perform an action when the component is mounted.
// In this case, the `Scrollbar` is initialized on the `containerRef` element.


// The setup function should return the variables or functions that you want to expose to the template.
</script>
