<template>
  <div>
    <nav class="flex justify-between p-4 items-center text-white">
      <div class="z-10" @click="$router.push('/')">
        <img
          class="cursor-pointer hover:scale-90 hover:ease-in-out delay-200"
          src="../assets/Logo/default-monochrome-white.svg"
          alt=""
        />
      </div>

      <div class="flex items-center gap-4 z-50 -mt-2">
        <h1 class="max-sm:hidden" :class="{ 'text-black ': isMenuOpen }">
          {{ isMenuOpen ? "Close" : "Menu" }}
        </h1>
        <div
          :class="{
            '  bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer  ':
              !isMenuOpen,
            'cursor-pointer bg-black w-10 h-10 rounded-full': isMenuOpen,
          }"
          @click="toggleMenu"
        >
          <div>
            <span
              :class="{
                ' bg-white   rotate-45 translate-x-2 translate-y-5 transition-transform':
                  isMenuOpen,
                ' bg-black': !isMenuOpen,
              }"
              class="w-6 h-0.5 mb-1 block"
            ></span>
            <span
              :class="{
                'hidden ': isMenuOpen,
                'bg-black mb-1 block w-4 ml-2 h-0.5  ': !isMenuOpen,
              }"
            ></span>
            <span
              :class="{
                '-rotate-45  translate-x-2 translate-y-3.5 items-center transition-transform bg-white ':
                  isMenuOpen,
                ' bg-black': !isMenuOpen,
              }"
              class="w-6 h-0.5 block"
            ></span>
          </div>
        </div>
      </div>

      <div
        :class="{
          '  hidden ': !isMenuOpen,
          ' absolute   bg-white w-full h-full z-30 text-5xl top-0 left-0  p-4  animate-in-circle-swoop  text-black ':
            isMenuOpen,
        }"
      >
        <div class="mt-28 max-sm:mt-20 container max-sm:max-w-xs  mx-auto">
          <div class="grid sm:grid-cols-2 max-sm:block max-sm:p-12">
            <div class="sm:flex">
              <div>
                <h1
                  class="text-lg font-medium max-sm:text-base text-silver-sand sm:text-black max-sm:lowercase sm:-rotate-90 mr-14 sm:max-sm:mt-4 max-sm:mb-12"
                >
                  Menu
                </h1>
              </div>
              <div>
                <ul>
                  <li
                    v-for="navItem in navLists"
                    :key="navItem.id"
                    @mouseover="hoveredItemId = navItem.id"
                    @mouseout="hoveredItemId = null"
                    :class="{
                      'hover:translate-x-5 hover:transition-transform duration-500 max-sm:text-3xl sm:text-3xl  max-sm:tracking-wider  md:tracking-widest text-custom-black  font-light max-sm:mb-11 sm:mb-16 md:mb-20  ':
                        navItem.id,
                    }"
                  >
                    <div>
                      <span
                        v-if="hoveredItemId === navItem.id"
                        class="absolute -translate-x-6 -translate-y-4 text-black text-sm"
                      >
                        {{ "0" + navItem.id }}
                      </span>
                    </div>

                    <router-link :to="navItem.path">{{
                      navItem.name
                    }}</router-link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="text-base sm:hidden max-w-xs mx-auto">
              <h1 class="pb-4 text-silver-sand">Get in touch</h1>
              <span class="border-b-2"
                ><a href="mailto:">Homeify@email.com</a></span
              >
            </div>
            <section class="max-sm:max-w-xs m-auto max-sm:hidden">
              <div class="text-sm ml-2 leading-loose">
                <div class="mb-12">
                  <h1 class="text-lg text-gray-400">Philippines</h1>
                  <p>2432, Dagupan City,</p>
                </div>

                <div class="text-lg border-b-2 border-gray-300 w-48">
                  <span><a href="#">homeify@email.com</a></span>
                </div>

                <div class="mb-12">
                  <router-link to="">Privacy Policy</router-link>
                </div>

                <div class="">
                  <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Github</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { isMenuOpen, toggleMenu } from "../composables/menu";
export default {
  setup() {
    const isMobile = ref(false);
    const hoveredItemId = ref(null);
    const navLists = reactive([
      { id: 1, name: "Home", path: "/" },
      { id: 2, name: "Works", path: "works" },
      { id: 3, name: "Shop", path: "shop" },
      { id: 4, name: "About", path: "error" },
    ]);

    return {
      hoveredItemId,
      isMenuOpen,
      toggleMenu,
      navLists,
    };
  },
};
</script>
