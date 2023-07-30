import { isMenuOpen } from "@/composables/menu";
import { useFollowMouse } from "@/composables/customCursor";

import { onMounted, ref } from "vue";
export default {
  setup() {
    const { ball } = useFollowMouse();
    return { isMenuOpen, ball };
  },
};
