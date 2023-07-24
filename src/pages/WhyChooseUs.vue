<template>
  <div class="bg-white text-black max-sm:p-4 sm:p-5">
    <div
      class="pt-32 max-sm:max-w-md container mx-auto max-sm:p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
    >
      <div
        :class="{
          'border-b-2 border-solid border-Ash-Grey hover:border-black duration-500 ease-in-out max-sm:pb-16 sm:pb-24 max-sm:pt-12 sm:grid sm:grid-cols-2 sm:gap-5 sm:p-6':
            item,
        }"
        v-for="item in items"
        :key="item.id"
      >
        <div
          class="mb-7 max-sm:text-3xl max-sm:max-w-xs sm:max-w-sm font-light sm:text-3xl"
        >
          <h1>{{ item.title }}</h1>
        </div>

        <div
          class="text-justify max-sm:text-sm max-sm:leading-loose sm:text-sm sm:flex sm:leading-5 md:leading-6"
        >
          <p>{{ item.description }}</p>

          <div class="max-sm:flex max-sm:justify-end">
            <div class="max-sm:translate-y-10 sm:ml-6 sm:relative sm:top-6">
              <span
                class="w-5 h-0.5 block bg-Ash-Grey transform rotate-90"
              ></span>
              <span class="w-5 h-0.5 block bg-Ash-Grey -translate-y-0.5"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hoveredItem = ref(null);
const items = ref([
  {
    id: 1,
    title: "Uncompromising Quality",
    description:
      "At HOMEIFY, we uphold the belief that quality should never be compromised. Our brand is dedicated to providing only the finest furniture, ensuring that every piece meets the highest standards. From the materials we use to the craftsmanship we employ, we take every step to deliver products that exceed your expectations.",
  },
  {
    id: 2,
    title: "Passion for Superior Experiences",
    description:
      "For us, it's not just about selling furniture; it's about creating exceptional experiences. Our team is driven by a passion to craft remarkable journeys for our customers. Whether it's the ease of navigating our website, the personalized customer service, or the seamless delivery process, we go above and beyond to ensure your satisfaction",
  },
  {
    id: 3,
    title: "Doing Things Right, Every Time",
    description:
      "We firmly believe in doing things once and doing them right. Cutting corners is not an option for us. With care, expertise, and unwavering effort, we guarantee that each item in our collection is meticulously crafted. When you shop with us, you can be confident that you are investing in furniture that will stand the test of time.",
  },
  {
    id: 4,
    title: "Transparency at the Core",
    description:
      "Transparency is a cornerstone of our business ethos. We believe in building trust with our customers, which is why we are open and honest in all our dealings. From pricing and product information to delivery schedules, we ensure that you are well-informed throughout your shopping journey.",
  },
]);
</script>
