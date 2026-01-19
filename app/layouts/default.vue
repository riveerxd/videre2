<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Vibrant Glassmorphic Background -->
    <div class="fixed inset-0 z-0">
      <!-- Base gradient - teal/cyan vibes -->
      <div class="absolute inset-0 bg-white"></div>

      <!-- Teal/Cyan floating orbs -->
      <div class="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-br from-teal-400/30 to-cyan-500/25 rounded-full blur-3xl animate-float"></div>
      <div class="absolute top-[5%] right-[-8%] w-[350px] h-[350px] bg-gradient-to-br from-cyan-400/25 to-teal-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-[40%] left-[-8%] w-[300px] h-[300px] bg-gradient-to-br from-teal-300/25 to-cyan-400/20 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute top-[60%] right-[5%] w-[350px] h-[350px] bg-gradient-to-br from-cyan-300/25 to-teal-400/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-[-5%] left-[20%] w-[400px] h-[400px] bg-gradient-to-br from-teal-400/25 to-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      <!-- Center blobs -->
      <div class="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-gradient-to-br from-cyan-400/20 to-teal-400/15 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute top-[50%] left-[25%] w-[250px] h-[250px] bg-gradient-to-br from-teal-300/20 to-cyan-300/15 rounded-full blur-3xl animate-float"></div>
      <div class="absolute top-[45%] right-[30%] w-[280px] h-[280px] bg-gradient-to-br from-cyan-300/20 to-teal-300/15 rounded-full blur-3xl animate-float-delayed"></div>

      <!-- Dot grid pattern -->
      <div class="absolute inset-0 opacity-40">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.15) 1px, transparent 0); background-size: 24px 24px;"></div>
      </div>

      <!-- Noise texture overlay for depth -->
      <div class="absolute inset-0 opacity-[0.015]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');"></div>
    </div>

    <!-- Content wrapper -->
    <div class="relative z-10">
      <Navbar />
      <main class="pt-20">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<style>
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

@keyframes float-delayed {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-25px, 25px) scale(0.95); }
  66% { transform: translate(35px, -15px) scale(1.05); }
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -40px) scale(1.03); }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 25s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 30s ease-in-out infinite;
}
</style>
