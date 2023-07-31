<template>
  <div
    :class="{ 'text-white w-full h-screen': !isMenuOpen }"
    ref="containerRef"
  >
    <div class="flex justify-center">
      <component :is="Navigation" class="container mx-auto absolute" />
    </div>

    <component :is="TopFeature" />
    <component :is="HeroSection" class="container mx-auto" />
  </div>
</template>

<script setup>
import { isMenuOpen } from "@/composables/menu";
import { customScrollbar } from "@/composables/scrollbar";
import { defineAsyncComponent } from "vue";

const { containerRef } = customScrollbar();
const FeatureWorks = defineAsyncComponent(() =>
  import("../workpages/FeatureWorks.vue")
);
const TopFeature = defineAsyncComponent(() =>
  import("../workpages/TopFeature.vue")
);
const Navigation = defineAsyncComponent(() =>
  import("../components/Navigation.vue")
);
const HeroSection = defineAsyncComponent(() =>
  import("../workpages/HeroWorks.vue")
);
</script>
