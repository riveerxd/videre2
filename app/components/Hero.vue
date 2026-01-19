<template>
  <section id="hero" class="relative flex items-center">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        <!-- Left content -->
        <div class="space-y-8 text-center lg:text-left">

          <!-- Heading -->
          <div class="space-y-4">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              <span class="text-gray-900">Oční klinika</span>
              <span class="block bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 bg-clip-text text-transparent">Videre 2</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Precizní péče o Váš zrak s využitím moderních technologií a individuálního přístupu.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#procedures"
              @click.prevent="smoothScrollTo('procedures')"
              class="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Naše služby</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>

            <a
              href="tel:+420739102255"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card-btn font-bold rounded-2xl hover:-translate-y-0.5 transition-all duration-300 text-gray-700 hover:text-teal-600"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>Zavolat</span>
            </a>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4">
            <div class="text-center">
              <div class="text-3xl font-black bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">15+</div>
              <div class="text-sm text-gray-500">let zkušeností</div>
            </div>
            <div class="w-px h-12 bg-gray-200"></div>
            <div class="text-center">
              <div class="text-3xl font-black bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">10k+</div>
              <div class="text-sm text-gray-500">spokojených pacientů</div>
            </div>
            <div class="w-px h-12 bg-gray-200"></div>
            <div class="text-center">
              <div class="text-3xl font-black bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">99%</div>
              <div class="text-sm text-gray-500">úspěšnost</div>
            </div>
          </div>
        </div>

        <!-- Right side - Glassmorphic image card -->
        <div class="relative">
          <!-- Main glass card with image -->
          <div class="glass-card rounded-3xl overflow-hidden shadow-2xl">
            <div class="relative aspect-[4/3]">
              <img
                src="/images/heroimageop.webp"
                alt="Oční vyšetření"
                class="w-full h-full object-cover"
              >
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const smoothScrollTo = (sectionId) => {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    const navbarHeight = 80;
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.glass-card-btn {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(20, 184, 166, 0.3);
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
