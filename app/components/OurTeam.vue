<template>
  <section id="our-team" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full border border-purple-200/50 mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        <span class="text-sm font-medium text-purple-700">Odborníci s praxí</span>
      </div>

      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
        <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Náš</span>
        <span class="text-gray-900"> tým</span>
      </h2>
      <p class="text-lg text-gray-600 font-medium max-w-2xl mx-auto">Odborníci s dlouholetými zkušenostmi v oboru oftalmologie</p>
    </div>

    <!-- Team Members Grid -->
    <div class="grid md:grid-cols-2 gap-8 lg:gap-12">

      <!-- MUDr. Samer Al Marei -->
      <div class="relative group">
        <!-- Decorative blur -->
        <div class="absolute -inset-4 bg-gradient-to-r from-purple-200 via-violet-200 to-purple-200 rounded-[2rem] opacity-30 blur-2xl group-hover:opacity-50 transition-all duration-500"></div>

        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <!-- Profile Image -->
          <div class="relative h-64 overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-28 h-28 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30">
                <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
            </div>

            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-full">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span class="text-xs font-semibold text-emerald-700">Lékař</span>
              </div>
            </div>
          </div>

          <!-- Member Info -->
          <div class="p-8">
            <div class="text-center space-y-4">
              <!-- Name and Title -->
              <div>
                <h3 class="text-2xl font-black text-gray-900 mb-1">MUDr. Samer Al Marei</h3>
                <p class="text-purple-600 font-semibold">Oftalmolog</p>
              </div>

              <!-- Experience Stats -->
              <div class="flex items-center justify-center gap-8">
                <div class="text-center">
                  <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-purple-500/20">
                    <span class="text-white font-black text-lg">20+</span>
                  </div>
                  <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Let praxe</div>
                </div>
                <div class="w-px h-12 bg-gray-200"></div>
                <div class="text-center">
                  <div class="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-violet-500/20">
                    <span class="text-white font-black text-sm">8k+</span>
                  </div>
                  <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Pacientů</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dr. Plichta -->
      <div class="relative group">
        <!-- Decorative blur -->
        <div class="absolute -inset-4 bg-gradient-to-r from-violet-200 via-purple-200 to-violet-200 rounded-[2rem] opacity-30 blur-2xl group-hover:opacity-50 transition-all duration-500"></div>

        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <!-- Profile Image -->
          <div class="relative h-64 overflow-hidden bg-gradient-to-br from-violet-50 to-purple-50">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-28 h-28 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-violet-500/30">
                <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
            </div>

            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-full">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span class="text-xs font-semibold text-emerald-700">Lékař</span>
              </div>
            </div>
          </div>

          <!-- Member Info -->
          <div class="p-8">
            <div class="text-center space-y-4">
              <!-- Name and Title -->
              <div>
                <h3 class="text-2xl font-black text-gray-900 mb-1">MUDr. Plichta</h3>
                <p class="text-violet-600 font-semibold">Oftalmolog</p>
              </div>

              <!-- Experience Stats -->
              <div class="flex items-center justify-center gap-8">
                <div class="text-center">
                  <div class="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-violet-500/20">
                    <span class="text-white font-black text-lg">15+</span>
                  </div>
                  <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Let praxe</div>
                </div>
                <div class="w-px h-12 bg-gray-200"></div>
                <div class="text-center">
                  <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-purple-500/20">
                    <span class="text-white font-black text-sm">5k+</span>
                  </div>
                  <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Pacientů</div>
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
// OurTeam component with team member profiles
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
