<template>
  <section>
    <div :class="{ 'w-screen h-screen': !isMenuOpen }" ref="containerRef">
      <component :is="HeaderPage" />
      <component :is="CarouselSection" />
      <component :is="TestimonialSection" />
      <component :is="WhyChooseUs" id="why-choose-us" />
      <component :is="FooterSection" />
    </div>
  </section>
</template>

<script src="../composables/home"></script>
