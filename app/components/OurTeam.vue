<template>
  <section id="our-team" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        <span class="text-sm font-medium text-gray-700">Odborníci s praxí</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black tracking-tight mb-4">
        <span class="text-gray-900">Náš</span>
        <span class="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"> tým</span>
      </h2>
      <p class="text-lg text-gray-600">Odborníci s dlouholetými zkušenostmi v oboru oftalmologie</p>
    </div>

    <!-- Team Grid -->
    <div class="grid md:grid-cols-2 gap-8">

      <!-- Doctor 1 -->
      <div class="glass-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
        <div class="relative h-48 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center overflow-hidden">
          <div class="w-28 h-28 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
            <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <div class="absolute top-4 right-4 px-3 py-1.5 bg-emerald-100 rounded-full">
            <span class="text-xs font-bold text-emerald-700">Lékař</span>
          </div>
        </div>
        <div class="p-8 text-center">
          <h3 class="text-2xl font-black text-gray-900 mb-1">MUDr. Samer Al Marei</h3>
          <p class="text-teal-600 font-semibold mb-6">Oftalmolog</p>
          <div class="flex items-center justify-center gap-8">
            <div class="text-center">
              <div class="text-2xl font-black bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">20+</div>
              <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Let praxe</div>
            </div>
            <div class="w-px h-12 bg-gray-200"></div>
            <div class="text-center">
              <div class="text-2xl font-black bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">8k+</div>
              <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Pacientů</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Doctor 2 -->
      <div class="glass-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
        <div class="relative h-48 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center overflow-hidden">
          <div class="w-28 h-28 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
            <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <div class="absolute top-4 right-4 px-3 py-1.5 bg-emerald-100 rounded-full">
            <span class="text-xs font-bold text-emerald-700">Lékař</span>
          </div>
        </div>
        <div class="p-8 text-center">
          <h3 class="text-2xl font-black text-gray-900 mb-1">MUDr. Plichta</h3>
          <p class="text-teal-600 font-semibold mb-6">Oftalmolog</p>
          <div class="flex items-center justify-center gap-8">
            <div class="text-center">
              <div class="text-2xl font-black bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">15+</div>
              <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Let praxe</div>
            </div>
            <div class="w-px h-12 bg-gray-200"></div>
            <div class="text-center">
              <div class="text-2xl font-black bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">5k+</div>
              <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Pacientů</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
