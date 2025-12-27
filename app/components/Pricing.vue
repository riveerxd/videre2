<template>
  <section id="pricing" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full border border-purple-200/50 mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        <span class="text-sm font-medium text-purple-700">Transparentní ceny</span>
      </div>

      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
        <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Ceník</span>
        <span class="text-gray-900"> Služeb</span>
      </h2>
      <p class="text-lg text-gray-600 font-medium max-w-2xl mx-auto">Transparentní ceny očních vyšetření a zákroků. Spolupracujeme se všemi zdravotními pojišťovnami.</p>
    </div>

    <!-- Pricing Content -->
    <div class="space-y-8">

      <!-- Non-insured Procedures -->
      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-purple-200 via-violet-200 to-purple-200 rounded-[2rem] opacity-30 blur-2xl"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-black text-gray-900 mb-2">Zákroky nehrazené zdravotní pojišťovnou</h3>
            <p class="text-gray-600">Vyšetření a služby mimo standardní pojištění</p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Price Item 1 -->
            <div class="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 text-center border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span class="text-gray-800 font-semibold text-sm block mb-3">Vyšetření na řidičský průkaz</span>
              <span class="text-2xl font-black text-purple-600">800 Kč</span>
            </div>

            <!-- Price Item 2 -->
            <div class="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 text-center border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span class="text-gray-800 font-semibold text-sm block mb-3">Vyšetření na řidičský průkaz - Senioři</span>
              <span class="text-2xl font-black text-purple-600">800 Kč</span>
            </div>

            <!-- Price Item 3 -->
            <div class="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 text-center border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span class="text-gray-800 font-semibold text-sm block mb-3">Vyšetření na zbrojní průkaz</span>
              <span class="text-2xl font-black text-purple-600">1500 Kč</span>
            </div>

            <!-- Price Item 4 -->
            <div class="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 text-center border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span class="text-gray-800 font-semibold text-sm block mb-3">Preventivní prohlídky pro zaměstnavatele</span>
              <span class="text-2xl font-black text-purple-600">1000 Kč</span>
              <p class="text-xs text-gray-500 italic mt-2">cílené vyšetření pro zaměstnavatele nebo jiné nezdravotnické instituce</p>
            </div>

            <!-- Price Item 5 -->
            <div class="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 text-center border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span class="text-gray-800 font-semibold text-sm block mb-3">Výpis karty</span>
              <span class="text-2xl font-black text-purple-600">300 Kč</span>
            </div>

            <!-- Price Item 6 -->
            <div class="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 text-center border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span class="text-gray-800 font-semibold text-sm block mb-3">Sepsání potvrzení</span>
              <span class="text-2xl font-black text-purple-600">800 Kč</span>
              <p class="text-xs text-gray-500 italic mt-2">které nesouvisí s léčebnou činností</p>
            </div>

            <!-- Price Item 7 -->
            <div class="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 text-center border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span class="text-gray-800 font-semibold text-sm block mb-3">Vyšetření OCT – sítnice, obě oči</span>
              <span class="text-2xl font-black text-purple-600">700 Kč</span>
            </div>

            <!-- Price Item 8 -->
            <div class="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 text-center border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span class="text-gray-800 font-semibold text-sm block mb-3">Vyšetření samoplátců - nepojištěných klientů</span>
              <span class="text-2xl font-black text-purple-600">2000 Kč</span>
              <p class="text-xs text-gray-500 italic mt-2">preventivní</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Plastic Surgery -->
      <div class="relative max-w-2xl mx-auto">
        <div class="absolute -inset-4 bg-gradient-to-r from-emerald-200 via-green-200 to-emerald-200 rounded-[2rem] opacity-30 blur-2xl"></div>
        <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div class="text-center mb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-full mb-4">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-semibold text-emerald-700">Estetika</span>
            </div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">Plastická operace očních víček</h3>
            <p class="text-gray-600">Profesionální chirurgické zákroky pro mladistvý vzhled</p>
          </div>

          <div class="grid gap-6 sm:grid-cols-2">
            <div class="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 text-center border-2 border-transparent hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h4 class="text-lg font-bold text-gray-800 mb-3">Horních víček</h4>
              <span class="text-3xl font-black text-emerald-600">15 000 Kč</span>
            </div>

            <div class="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 text-center border-2 border-transparent hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h4 class="text-lg font-bold text-gray-800 mb-3">Dolních víček</h4>
              <span class="text-3xl font-black text-emerald-600">15 000 Kč</span>
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
