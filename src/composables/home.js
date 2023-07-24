import { ref, onMounted, defineAsyncComponent } from "vue";
import Scrollbar from "smooth-scrollbar";

import { isMenuOpen } from "./menu";

export default {
  setup() {
    const containerRef = ref(null);

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

    onMounted(() => {
      Scrollbar.init(containerRef.value, { damping: 0.02 });
    });

    return {
      containerRef,
      isMenuOpen,
      HeaderPage,
      TestimonialSection,
      WhyChooseUs,
      FooterSection,
      CarouselSection,
    };
  },
};
