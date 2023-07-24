import { isMenuOpen } from "@/composables/menu";
import { useFollowMouse } from "@/composables/customCursor";

export default {
  setup() {
    const { ball } = useFollowMouse();
    return { isMenuOpen,ball };
  },
};
