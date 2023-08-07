<template>
  <div
    :class="{ 'text-white w-full h-screen': !isMenuOpen }"
    ref="containerRef"
  > 
    <component :is="TopFeature" />
    <component :is="HeroSection" />
  </div>
</template>

<script setup>
import { isMenuOpen } from "@/composables/menu";
import { customScrollbar } from "@/composables/scrollbar";
import { defineAsyncComponent } from "vue";
const { containerRef } = customScrollbar();

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
