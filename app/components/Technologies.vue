<template>
  <section id="technologies" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full border border-purple-200/50 mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        <span class="text-sm font-medium text-purple-700">Moderní vybavení</span>
      </div>

      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
        <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Diagnostické</span>
        <span class="text-gray-900"> Technologie</span>
      </h2>
      <p class="text-lg text-gray-600 font-medium max-w-2xl mx-auto">Nejmodernější přístrojové vybavení pro přesnou diagnostiku očních onemocnění</p>
    </div>

    <!-- Technology Cards -->
    <div class="grid gap-8 md:grid-cols-2">

      <!-- Technology Card 1 - Aplanacni tonometr -->
      <div class="group relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-purple-200 via-violet-200 to-purple-200 rounded-[2rem] opacity-0 blur-2xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl h-full transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">Aplanační tonometr</h3>
            <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-400 rounded-full"></div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Měření nitroočního tlaku je základem v péči o glaukomové pacienty (zelený zákal) a patří též k základnímu preventivnímu programu v naší ordinaci. Každý, kdo dovršil 40-ti let věku, by měl toto vyšetření podstoupit…
          </p>
        </div>
      </div>

      <!-- Technology Card 2 - Autokeratorefraktometr -->
      <div class="group relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-violet-200 via-purple-200 to-violet-200 rounded-[2rem] opacity-0 blur-2xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl h-full transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">Autokeratorefraktometr</h3>
            <div class="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Přístroj je nepostradatelným pomocníkem v každé oční ambulanci. Slouží k zjištění oční vady (krátkozrakost, dalekozrakost, astigmatismus) a měří parametry rohovky nutné pro správný výběr kontaktních čoček…
          </p>
        </div>
      </div>

      <!-- Technology Card 3 - Perimetr -->
      <div class="group relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-purple-200 via-violet-200 to-purple-200 rounded-[2rem] opacity-0 blur-2xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl h-full transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">Perimetr</h3>
            <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Pomocí perimetru vyšetřujeme zorné pole. Toto vyšetření mapuje funkci sítnice, zrakového nervu a zrakové dráhy až k centru vidění v mozku. Vyšetření se též provádí u řidičů ke zjištění dostatečného periferního vidění…
          </p>
        </div>
      </div>

      <!-- Technology Card 4 - OCT -->
      <div class="group relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-violet-200 via-purple-200 to-violet-200 rounded-[2rem] opacity-0 blur-2xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl h-full transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">OCT</h3>
            <div class="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Tento přístroj využívá infračervené světlo k zobrazení biologických tkání v jejich příčném průřezu. Pomáhá stanovit správnou diagnózu očního onemocnění, porovnávat vyšetření v časových intervalech, naplánovat odpovídající léčbu a vyhodnotit její účinnost…
          </p>
        </div>
      </div>

    </div>

    <!-- Pachymetr - Full Width Card -->
    <div class="mt-8">
      <div class="group relative max-w-2xl mx-auto">
        <div class="absolute -inset-4 bg-gradient-to-r from-purple-200 via-violet-200 to-purple-200 rounded-[2rem] opacity-0 blur-2xl group-hover:opacity-40 transition-all duration-500"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">Pachymetr</h3>
            <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Tloušťku rohovky měříme pomocí ultrazvukového přístroje – pachymetru. Její znalost je důležitá pro správné vyhodnocení zjištěného nitroočního tlaku u glaukomového onemocnění (zelený zákal). Je nezbytným parametrem i v refrakční chirurgii k rozhodnutí způsobu operace u očních vad…
          </p>
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
