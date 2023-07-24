import { ref } from "vue";

const feature = require.context("@/assets/images", false, /\.png$/);

export default {
  setup() {
    const featureImgs = ref([
      {
        id: 1,
        src: feature("./Feature_1.png"),
        alt: "feature_1",
        title: "Discover Our Lavish Bedroom Collection",
        description:
          "Experience the pinnacle of comfort with Homeify's luxurious bedroom furniture. Our selection will transform your sleep into a dreamy escape.",
      },
      {
        id: 2,
        src: feature("./Feature_2.png"),
        alt: "feature_2",
        title: "Revamp Your Living Spaces",
        description:
          "Elevate your interiors with Homeify's sleek and contemporary living room furniture. Make a statement that'll leave your guests in awe.",
      },
      {
        id: 3,
        src: feature("./Feature_3.png"),
        alt: "feature_3",
        title: "Enhance Your Kitchen Experience",
        description:
          "Upgrade your cooking space with Homeify's top-of-the-line kitchen appliances and accessories. Prepare meals like a professional chef.",
      },
      {
        id: 4,
        src: feature("./Feature_4.png"),
        alt: "feature_3",
        title: "Illuminating Ambiance",
        description:
          " Elevate Your Home with Homeify's Exquisite Lighting Decor",
      },
    ]);

    const featureImg2 = ref(featureImgs.value[1]);
    const featureImg4 = ref(featureImgs.value[3]);

    return {
      featureImgs,
      featureImg2,
      featureImg4,
    };
  },
};
