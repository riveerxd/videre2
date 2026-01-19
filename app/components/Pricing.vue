<template>
  <section id="pricing" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        <span class="text-sm font-medium text-gray-700">Transparentní ceny</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black tracking-tight mb-4">
        <span class="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Ceník</span>
        <span class="text-gray-900"> Služeb</span>
      </h2>
      <p class="text-lg text-gray-600">Transparentní ceny. Spolupracujeme se všemi zdravotními pojišťovnami.</p>
    </div>

    <!-- Pricing Cards -->
    <div class="space-y-8">

      <!-- Main Pricing -->
      <div class="glass-card rounded-3xl p-8 shadow-xl">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-black text-gray-900 mb-2">Zákroky nehrazené pojišťovnou</h3>
          <p class="text-gray-600">Vyšetření a služby mimo standardní pojištění</p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(item, index) in prices"
            :key="index"
            class="p-5 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 border border-white/60 text-center hover:from-teal-50/50 hover:to-cyan-50/30 transition-colors duration-300 group"
          >
            <span class="text-gray-700 text-sm font-medium block mb-2">{{ item.name }}</span>
            <span class="text-2xl font-black bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">{{ item.price }}</span>
            <p v-if="item.note" class="text-xs text-gray-500 mt-2">{{ item.note }}</p>
          </div>
        </div>
      </div>

      <!-- Plastic Surgery -->
      <div class="glass-card rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 rounded-full mb-4">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span class="text-xs font-bold text-teal-700">Estetika</span>
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-2">Plastická operace očních víček</h3>
          <p class="text-gray-600">Profesionální chirurgické zákroky</p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <div class="p-6 rounded-2xl bg-gradient-to-br from-teal-50/80 to-cyan-50/60 border border-teal-100 text-center group hover:border-teal-200 transition-colors">
            <h4 class="text-lg font-bold text-gray-800 mb-2">Horních víček</h4>
            <span class="text-3xl font-black bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">15 000 Kč</span>
          </div>
          <div class="p-6 rounded-2xl bg-gradient-to-br from-teal-50/80 to-cyan-50/60 border border-teal-100 text-center group hover:border-teal-200 transition-colors">
            <h4 class="text-lg font-bold text-gray-800 mb-2">Dolních víček</h4>
            <span class="text-3xl font-black bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">15 000 Kč</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const prices = [
  { name: 'Vyšetření na řidičský průkaz', price: '800 Kč' },
  { name: 'Vyšetření na řidičský průkaz - Senioři', price: '800 Kč' },
  { name: 'Vyšetření na zbrojní průkaz', price: '1 500 Kč' },
  { name: 'Preventivní prohlídky pro zaměstnavatele', price: '1 000 Kč', note: 'cílené vyšetření' },
  { name: 'Výpis karty', price: '300 Kč' },
  { name: 'Sepsání potvrzení', price: '800 Kč', note: 'nesouvisí s léčbou' },
  { name: 'Vyšetření OCT – sítnice, obě oči', price: '700 Kč' },
  { name: 'Vyšetření samoplátců', price: '2 000 Kč', note: 'preventivní' },
];
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
