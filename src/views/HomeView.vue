<template>
  <section>
    <div :class="{ 'w-screen h-screen': !isMenuOpen }" ref="containerRef">
     
      <headerPage />
      <CarouselSection/>
      <TestimonialSection />
      <WhyChooseUs />
      <GallerySection class="max-sm:h-full" />
    </div>
  </section>
</template>

<script src="../composables/home"></script>
