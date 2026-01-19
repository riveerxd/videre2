<template>
  <section id="contact" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100/80 backdrop-blur-sm rounded-full border border-cyan-200/50 mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span class="text-sm font-medium text-cyan-700">Jsme tu pro vás</span>
      </div>

      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
        <span class="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">Kontakt</span>
        <span class="text-gray-900"> & Aktuality</span>
      </h2>
      <p class="text-lg text-gray-600 font-medium max-w-2xl mx-auto">Spojte se s námi nebo si přečtěte nejnovější zprávy</p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <!-- Contact Info Section -->
      <div class="relative">
        <!-- Decorative blur -->
        <div class="absolute -inset-4 bg-gradient-to-r from-cyan-200 via-teal-200 to-cyan-200 rounded-[2rem] opacity-30 blur-2xl"></div>

        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl h-full border border-white/20">
          <h3 class="text-2xl font-black text-gray-900 mb-6">Kontaktní informace</h3>

          <div class="space-y-4">
            <!-- Phone Contact 1 -->
            <a
              href="tel:+420739102255"
              class="group flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-cyan-50 border-2 border-transparent hover:border-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div class="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">Recepce</h4>
                <span class="text-cyan-600 font-semibold">+420 739 102 255</span>
              </div>
            </a>

            <!-- Phone Contact 2 - Dr. Plichta -->
            <a
              href="tel:+420603274021"
              class="group flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-cyan-50 border-2 border-transparent hover:border-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div class="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">MUDr. Plichta</h4>
                <span class="text-cyan-600 font-semibold">+420 603 274 021</span>
              </div>
            </a>

            <!-- Email Contact -->
            <a
              href="mailto:videre2.cz@gmail.com"
              class="group flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-cyan-50 border-2 border-transparent hover:border-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div class="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">Email</h4>
                <span class="text-cyan-600 font-semibold">videre2.cz@gmail.com</span>
              </div>
            </a>

            <!-- Address -->
            <a
              href="https://www.google.com/maps/search/Strossmayerovo+n%C3%A1m.+977%2F2,+Praha+7"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-cyan-50 border-2 border-transparent hover:border-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div class="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">Adresa</h4>
                <span class="text-cyan-600 font-semibold">Strossmayerovo nám. 977/2, Praha 7</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Aktuality Section -->
      <div class="relative">
        <!-- Decorative blur -->
        <div class="absolute -inset-4 bg-gradient-to-r from-emerald-200 via-green-200 to-emerald-200 rounded-[2rem] opacity-30 blur-2xl"></div>

        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl h-full border border-white/20">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-black text-gray-900">Aktuality</h3>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-full">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-semibold text-emerald-700">Novinky</span>
            </div>
          </div>

          <div class="space-y-4">
            <!-- News Item 1 -->
            <div class="group p-5 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-bold text-emerald-700 bg-emerald-200 px-2.5 py-1 rounded-full">NOVÉ</span>
                    <span class="text-xs text-gray-500 font-medium">15. 9. 2025</span>
                  </div>
                  <h4 class="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">Příjímáme nové pacienty</h4>
                  <p class="text-gray-600 text-sm mt-1">Objednávejte se na první vyšetření.</p>
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
// Component logic can be added here if needed
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
