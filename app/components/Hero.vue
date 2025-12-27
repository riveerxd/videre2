<template>
  <section id="hero" class="relative flex items-center overflow-hidden">

    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Left content -->
        <div class="space-y-8 text-center lg:text-left">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full border border-purple-200/50">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span class="text-sm font-medium text-purple-700">Oční klinika Praha 7</span>
          </div>

          <!-- Heading -->
          <div class="space-y-4">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Videre</span>
              <span class="text-gray-900"> 2</span>
            </h1>
            <p class="text-xl sm:text-2xl text-gray-600 font-medium max-w-xl mx-auto lg:mx-0">
              Precizní péče o zrak s lidským přístupem
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="tel:+420739102255"
              class="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>Zavolat</span>
              <div class="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="mailto:videre2.cz@gmail.com"
              class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white backdrop-blur-xl text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>Napsat email</span>
            </a>
          </div>

          <!-- Trust indicators -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-600">Certifikovaní specialisté</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-600">Nejmodernější technologie</span>
            </div>
          </div>
        </div>

        <!-- Right side - Image composition -->
        <div class="relative flex items-center justify-center">
          <!-- Main image container -->
          <div class="relative w-full">
            <!-- Decorative ring -->
            <div class="absolute -inset-4 bg-gradient-to-r from-purple-200 via-violet-200 to-purple-200 rounded-3xl opacity-50 blur-2xl"></div>

            <!-- Image card -->
            <div class="relative rounded-3xl shadow-2xl overflow-hidden">
              <div class="relative aspect-[16/10]">
                <img
                  src="/images/heroimageop.webp"
                  alt="Pokročilé vyšetření očí"
                  class="w-full h-full object-cover"
                >
                <!-- Gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
              </div>
            </div>

            <!-- Floating stats card -->
            <div class="absolute -bottom-6 -left-6 bg-white backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-black text-gray-900">10k+</div>
                  <div class="text-xs text-gray-500 font-medium">Spokojených pacientů</div>
                </div>
              </div>
            </div>

            <!-- Experience badge -->
            <div class="absolute -top-4 -right-4 bg-white backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl border border-white/20">
              <div class="text-center">
                <div class="text-2xl font-black text-purple-600">15+</div>
                <div class="text-xs text-gray-500 font-medium">Let zkušeností</div>
              </div>
            </div>

            <!-- Success rate badge -->
            <div class="absolute bottom-12 -right-8 bg-gradient-to-br from-purple-600 to-violet-600 text-white rounded-2xl px-5 py-3 shadow-xl">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <span class="text-xl font-black">99%</span>
                  <span class="text-sm opacity-90 ml-1">úspěšnost</span>
                </div>
              </div>
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
    const splitter = targetSection.querySelector('.inline-flex.items-center.space-x-4') || targetSection;
    const elementPosition = splitter.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1200;
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  }
};
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
