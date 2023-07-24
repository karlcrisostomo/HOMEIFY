import HeaderPage from "@/pages/HeaderPage";
import HeroSection from "@/pages/HeroSection";

import GallerySection from "@/pages/GallerySection";
import FooterSection from "@/pages/FooterSection.vue";
import TestimonialSection from "@/pages/TestimonialSection.vue";
import WhyChooseUs from "@/pages/WhyChooseUs.vue";
import { isMenuOpen } from "./menu";
import CarouselSection from "@/pages/CarouselSection.vue";
import { ref, onMounted } from "vue";

import Scrollbar from "smooth-scrollbar";

export default {
  components: {
    HeaderPage,
    HeroSection,

    GallerySection,
    FooterSection,
    TestimonialSection,
    WhyChooseUs,
    CarouselSection,
  },

  setup() {
    const containerRef = ref(null);

    onMounted(() => {
      Scrollbar.init(containerRef.value, { damping: 0.02 });
    });

    return { containerRef, isMenuOpen };
  },
};
