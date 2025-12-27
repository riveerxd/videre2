<template>
  <section id="procedures" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full border border-purple-200/50 mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        <span class="text-sm font-medium text-purple-700">Komplexní péče</span>
      </div>

      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
        <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Zákroky</span>
        <span class="text-gray-900"> & Vyšetření</span>
      </h2>
      <p class="text-lg text-gray-600 font-medium max-w-2xl mx-auto">Komplexní oční péče pro celou rodinu s moderními technologiemi</p>
    </div>

    <!-- Procedures Grid -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      <!-- Procedure Card 1 -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-purple-200 to-violet-200 rounded-3xl opacity-0 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-gray-700 leading-relaxed font-medium">Komplexní oční vyšetření dětí a dospělých a předpis brýlové korekce</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Procedure Card 2 -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-purple-200 to-violet-200 rounded-3xl opacity-0 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/20 flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-gray-700 leading-relaxed font-medium">Zhotovení brýlí v naší oční optice</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Procedure Card 3 -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-purple-200 to-violet-200 rounded-3xl opacity-0 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-gray-700 leading-relaxed font-medium">Vyšetření a diagnostika chorob předního a zadního očního segmentu (slzné cesty, onemocnění rohovky, šedý zákal, makulární degenerace, glaukom, diabetu, hypertenze a cévních patologií)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Procedure Card 4 -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl opacity-0 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-gray-700 leading-relaxed font-medium">Vyšetření, předoperační příprava a objednání k operaci katarakty (šedý zákal), glaukom (zelený zákal), sítnice a péče o pacienty po operaci</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Procedure Card 5 -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-orange-200 to-red-200 rounded-3xl opacity-0 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-gray-700 leading-relaxed font-medium">Preventivní a vstupní prohlídky, vyšetření na řidičský průkaz, zbrojní průkaz</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Procedure Card 6 -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl opacity-0 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/20 flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-gray-700 leading-relaxed font-medium">Vyšetření na kontaktní čočky a jejich aplikaci, pravidelné kontroly</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Procedure Card 7 -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-purple-200 to-violet-200 rounded-3xl opacity-0 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-gray-700 leading-relaxed font-medium">Nadstandardní diagnostická vyšetření (počítačový perimetr, OCT, Pachymetr)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Procedure Card 8 -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-violet-200 to-purple-200 rounded-3xl opacity-0 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/20 flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-gray-700 leading-relaxed font-medium">Léčebné programy očních onemocnění v úzké spolupráci s prestižními očními klinikami</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
