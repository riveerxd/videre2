<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Premium Background Design - Deep Purple Theme -->
    <div class="fixed inset-0 z-0">
      <!-- Base white background with subtle purple tint -->
      <div class="absolute inset-0 bg-gradient-to-br from-white via-purple-50/40 to-violet-100/50"></div>

      <!-- Large blurry purple circles randomly positioned -->
      <div class="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-violet-300/35 to-purple-400/35 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-400/25 to-violet-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-violet-200/40 to-purple-400/40 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div class="absolute bottom-40 right-10 w-56 h-56 bg-gradient-to-r from-purple-300/35 to-violet-400/35 rounded-full blur-3xl animate-pulse delay-300"></div>
      <div class="absolute top-1/4 left-1/2 w-88 h-88 bg-gradient-to-r from-violet-300/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1200"></div>
      <div class="absolute bottom-1/3 left-1/6 w-48 h-48 bg-gradient-to-r from-purple-300/40 to-violet-400/40 rounded-full blur-3xl animate-pulse delay-800"></div>
      <div class="absolute top-3/4 right-1/3 w-40 h-40 bg-gradient-to-r from-violet-400/45 to-purple-300/45 rounded-full blur-3xl animate-pulse delay-400"></div>

      <!-- Additional large circles for more coverage -->
      <div class="absolute top-1/6 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-300/40 to-violet-400/40 rounded-full blur-2xl animate-pulse delay-600"></div>
      <div class="absolute bottom-1/4 right-1/6 w-24 h-24 bg-gradient-to-r from-violet-300/45 to-purple-400/45 rounded-full blur-2xl animate-pulse delay-900"></div>
      <div class="absolute top-2/3 left-2/3 w-36 h-36 bg-gradient-to-r from-purple-400/35 to-violet-300/35 rounded-full blur-2xl animate-pulse delay-1100"></div>

      <!-- Subtle overlay to blend everything -->
      <div class="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-purple-50/20"></div>

      <!-- Very subtle grid pattern -->
      <div class="absolute inset-0 opacity-8">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0); background-size: 50px 50px;"></div>
      </div>
    </div>

    <!-- Content wrapper with backdrop blur -->
    <div class="relative z-10">
      <!-- Navbar component -->
      <Navbar />
      
      <!-- Main content area with slot for page content -->
      <main class="pt-16">
        <slot />
      </main>
      
      <!-- Footer component -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
/* Custom animation delays for staggered pulsing */
.delay-1000 {
  animation-delay: 1s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-700 {
  animation-delay: 0.7s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-1200 {
  animation-delay: 1.2s;
}

.delay-800 {
  animation-delay: 0.8s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-600 {
  animation-delay: 0.6s;
}

.delay-900 {
  animation-delay: 0.9s;
}

.delay-1100 {
  animation-delay: 1.1s;
}
</style> 