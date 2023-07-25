<template>
  <div class="text-white ">
    <div class="container mx-auto p-2 h-screen relative">
      <div class="translate-y-1/2">
        <div class="text-center leading-loose">

          <h1 class="max-sm:text-5xl sm:text-6xl">Oops!</h1>
          <span class="sm:text-lg md:text-base">404 - PAGE NOT FOUND</span>
        </div>

        <div
          class="max-sm:text-base mt-11 text-justify max-sm:max-w-xs mx-auto sm:max-w-sm sm:text-lg md:text-xl md:max-w-md lg:max-w-md"
        >
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.

          <div class="flex justify-center mt-12 absolute left-1/4 right-1/4">
            <div
              class="hover:border-2 hover:p-2 rounded-lg transition-all ease-in-out duration-100 cursor-pointer border-dotted hover:relative"
              @click="$router.push('/')"
            >
              <span class="uppercase">go to homepage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
