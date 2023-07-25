import { useRouter } from "vue-router";

const router = useRouter();

export const goToPage = () => {
  router.push({ name: "error" });
};
