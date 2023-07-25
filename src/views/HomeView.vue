<template>
  <section>
    <div :class="{ 'w-screen h-screen ': !isMenuOpen }" ref="containerRef">
      <component :is="HeaderPage" />
      <component :is="CarouselSection" />
      <component :is="GallerySection"/>
      <component :is="TestimonialSection" />
      <component :is="WhyChooseUs" />
      <component :is="FooterSection" />
 
    </div>
  </section>
</template>

<script src="../composables/home"></script>
