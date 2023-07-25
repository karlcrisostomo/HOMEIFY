import { reactive, ref } from "vue";
const gallery = require.context("@/assets/images", false, /\.png$/);
const hoveredImgs = ref(false);
const galleryImgs = reactive([
  {
    id: 1,
    src: gallery("./Dining_Sets.png"),
    alt: "Dining Sets",
    title: "Dining Sets",
    description: "Feast in style with our elegant dining room sets.",
  },
  {
    id: 2,
    src: gallery("./Recliners.png"),
    alt: "Recliners",
    title: "Recliners",
    description: "Embrace the joys of ultimate relaxation.",
  },
  {
    id: 3,
    src: gallery("./Coffee_Table.png"),
    alt: "Coffee Table",
    title: "Coffee Table",
    description: "Enliven your living room with our chic coffee tables.",
  },
  {
    id: 4,
    src: gallery("./Outdoor_Furniture.png"),
    alt: "Outdoor Furniture",
    title: "Outdoor Furniture",
    description: "Upgrade your workspace for maximum productivity.",
  },
  {
    id: 5,
    src: gallery("./Office_Furniture.png"),
    alt: "Office Furniture",
    title: "Office Furniture",
    description: "Upgrade your workspace for maximum productivity.",
  },
  {
    id: 6,
    src: gallery("./Kids_Furniture.png"),
    alt: "Kids Furniture",
    title: "Kids Furniture",
    description: "Create a magical hideaway for your little ones.",
  },
  // Add other image objects here
]);
export default {
  setup() {
    return {
      galleryImgs,
      hoveredImgs,
    };
  },
};
