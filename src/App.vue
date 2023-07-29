<template>
  <div class="bg-black font-Poppins">
    <div
      :class="{
        ' hidden  lg:block w-8 h-8 fixed top-0 left-0 border-2 border-white border-solid rounded-full z-50 pointer-events-none':
          !isMenuOpen,
        ' hidden lg:block w-8 h-8 fixed top-0 left-0 border-2  border-solid rounded-full z-50 pointer-events-none border-black':
          isMenuOpen,
      }"
      ref="ball"
    ></div>

    <router-view />
  </div>
</template>

<style>
@import url("./styles/app.css");
</style>

<script src="@/composables/app"></script>
