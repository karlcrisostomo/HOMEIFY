import { ref, onMounted, defineAsyncComponent } from "vue";
import Scrollbar from "smooth-scrollbar";

// Import the `isMenuOpen` from the "./menu" file. Make sure the correct path is provided.
import { isMenuOpen } from "./menu";

export default {
  setup() {
    // Create a ref for the container element.
    const containerRef = ref(null);

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
    onMounted(() => {
      Scrollbar.init(containerRef.value, { damping: 0.02 });
    });

    // The setup function should return the variables or functions that you want to expose to the template.
    return {
      containerRef, // Make sure to return the ref so that it's accessible in the template.
      isMenuOpen, // Expose the `isMenuOpen` variable to the template.
      HeaderPage,
      TestimonialSection,
      WhyChooseUs,
      FooterSection,
      CarouselSection,
      GallerySection,
    };
  },
};
