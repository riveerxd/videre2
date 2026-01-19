<template>
  <!-- Premium Translucent Navbar -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-lg"
  >
    <div class="max-w-7xl lg:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <div class="flex items-center">
            <img src="/images/logo.png" alt="Videre 2 - Oční klinika Praha 7" class="w-14 h-9">
            <span class="ml-2 text-3xl font-black bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
              >Videre <span class="text-black">2</span></span
            >
          </div>
          </div>

                    <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a
                href="#hero"
                @click.prevent="smoothScrollTo('hero')"
                class="text-gray-700 hover:text-cyan-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
                >Domů</a
              >
              <a
                href="#opening-clinic"
                @click.prevent="smoothScrollTo('opening-clinic')"
                class="text-gray-700 hover:text-cyan-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
                >Klinika</a
              >
              <a
                href="#our-team"
                @click.prevent="smoothScrollTo('our-team')"
                class="text-gray-700 hover:text-cyan-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
                >Lékaři</a
              >
              <a
                href="#procedures"
                @click.prevent="smoothScrollTo('procedures')"
                class="text-gray-700 hover:text-cyan-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
                >Zákroky</a
              >
              <a
                href="#technologies"
                @click.prevent="smoothScrollTo('technologies')"
                class="text-gray-700 hover:text-cyan-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
                >Technologie</a
              >
              <a
                href="#pricing"
                @click.prevent="smoothScrollTo('pricing')"
                class="text-gray-700 hover:text-cyan-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
                >Ceník</a
              >
              <a
                href="#contact"
                @click.prevent="smoothScrollTo('contact')"
                class="text-gray-700 hover:text-cyan-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
                >Kontakt</a
              >
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-cyan-600 hover:bg-white/20 focus:outline-none focus:ring-cyan-500/50 transition-all duration-300"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Hamburger icon with morphing animation -->
              <div class="relative w-6 h-6 flex items-center justify-center">
                <span
                  class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
                  :class="isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'"
                ></span>
                <span
                  class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
                  :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
                ></span>
                <span
                  class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
                  :class="isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden overflow-hidden">
          <div
            class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-white/30"
          >
          <a
            href="#hero"
            @click.prevent="smoothScrollTo('hero')"
            class="text-gray-700 hover:text-cyan-600 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
            >Domů</a
          >
          <a
            href="#opening-clinic"
            @click.prevent="smoothScrollTo('opening-clinic')"
            class="text-gray-700 hover:text-cyan-600 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
            >Klinika</a
          >
          <a
            href="#our-team"
            @click.prevent="smoothScrollTo('our-team')"
            class="text-gray-700 hover:text-cyan-600 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
            >Lékaři</a
          >
          <a
            href="#procedures"
            @click.prevent="smoothScrollTo('procedures')"
            class="text-gray-700 hover:text-cyan-600 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
            >Zákroky</a
          >
          <a
            href="#technologies"
            @click.prevent="smoothScrollTo('technologies')"
            class="text-gray-700 hover:text-cyan-600 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
            >Technologie</a
          >
          <a
            href="#pricing"
            @click.prevent="smoothScrollTo('pricing')"
            class="text-gray-700 hover:text-cyan-600 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
            >Ceník</a
          >
          <a
            href="#contact"
            @click.prevent="smoothScrollTo('contact')"
            class="text-gray-700 hover:text-cyan-600 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg cursor-pointer"
            >Kontakt</a
          >
          </div>
        </div>
      </transition>
    </nav>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

// Smooth scroll function
const smoothScrollTo = (sectionId) => {
  // Close mobile menu if open
  isMobileMenuOpen.value = false;

  // Find the target section
  const targetSection = document.getElementById(sectionId);

  if (targetSection) {
    // Get navbar height for offset (adjust this value based on your navbar height)
    const navbarHeight = 80; // Approximate navbar height in pixels

    // Get the splitter element within the section (usually the first decorative element)
    const splitter = targetSection.querySelector('.inline-flex.items-center.space-x-4') || targetSection;

    // Calculate position with offset
    const elementPosition = splitter.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    // Premium smooth scroll with longer duration
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1200; // 1.2 seconds for premium feel
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smooth, premium feel
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
