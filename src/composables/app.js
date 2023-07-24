import { isMenuOpen } from "@/composables/menu";
import { useFollowMouse } from "@/composables/customCursor";
import { useScrollHandler } from "@/composables/useScrollHandler";
export default {
  setup() {
    const { ball } = useFollowMouse();
    const { showBall } = useScrollHandler();
    return { isMenuOpen, ball, showBall };
  },
};
