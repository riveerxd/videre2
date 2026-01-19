<template>
  <section id="technologies" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        <span class="text-sm font-medium text-gray-700">Moderní vybavení</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black tracking-tight mb-4">
        <span class="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Diagnostické</span>
        <span class="text-gray-900"> Technologie</span>
      </h2>
      <p class="text-lg text-gray-600">Nejmodernější přístrojové vybavení pro přesnou diagnostiku</p>
    </div>

    <!-- Technology Cards -->
    <div class="grid gap-6 md:grid-cols-2">
      <div
        v-for="(tech, index) in technologies"
        :key="index"
        class="glass-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
      >
        <div class="flex items-start gap-4 mb-4">
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
            :class="tech.gradient"
          >
            <component :is="tech.icon" class="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 class="text-xl font-black text-gray-900 mb-1">{{ tech.title }}</h3>
            <div class="w-12 h-1 rounded-full" :class="tech.bar"></div>
          </div>
        </div>
        <p class="text-gray-600 leading-relaxed">{{ tech.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

const ChartIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
]);

const CalculatorIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' })
]);

const GridIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' })
]);

const DesktopIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
]);

const RulerIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' })
]);

const technologies = [
  {
    icon: ChartIcon,
    gradient: 'bg-gradient-to-br from-teal-400 to-cyan-500',
    bar: 'bg-gradient-to-r from-teal-400 to-cyan-500',
    title: 'Aplanační tonometr',
    description: 'Měření nitroočního tlaku je základem v péči o glaukomové pacienty (zelený zákal) a patří též k základnímu preventivnímu programu v naší ordinaci. Každý, kdo dovršil 40-ti let věku, by měl toto vyšetření podstoupit.'
  },
  {
    icon: CalculatorIcon,
    gradient: 'bg-gradient-to-br from-cyan-400 to-teal-500',
    bar: 'bg-gradient-to-r from-cyan-400 to-teal-500',
    title: 'Autokeratorefraktometr',
    description: 'Přístroj je nepostradatelným pomocníkem v každé oční ambulanci. Slouží k zjištění oční vady (krátkozrakost, dalekozrakost, astigmatismus) a měří parametry rohovky nutné pro správný výběr kontaktních čoček.'
  },
  {
    icon: GridIcon,
    gradient: 'bg-gradient-to-br from-teal-400 to-cyan-500',
    bar: 'bg-gradient-to-r from-teal-400 to-cyan-500',
    title: 'Perimetr',
    description: 'Pomocí perimetru vyšetřujeme zorné pole. Toto vyšetření mapuje funkci sítnice, zrakového nervu a zrakové dráhy až k centru vidění v mozku. Vyšetření se též provádí u řidičů ke zjištění dostatečného periferního vidění.'
  },
  {
    icon: DesktopIcon,
    gradient: 'bg-gradient-to-br from-cyan-400 to-teal-500',
    bar: 'bg-gradient-to-r from-cyan-400 to-teal-500',
    title: 'OCT',
    description: 'Tento přístroj využívá infračervené světlo k zobrazení biologických tkání v jejich příčném průřezu. Pomáhá stanovit správnou diagnózu očního onemocnění, porovnávat vyšetření v časových intervalech, naplánovat odpovídající léčbu a vyhodnotit její účinnost.'
  },
  {
    icon: RulerIcon,
    gradient: 'bg-gradient-to-br from-teal-400 to-cyan-500',
    bar: 'bg-gradient-to-r from-teal-400 to-cyan-500',
    title: 'Pachymetr',
    description: 'Tloušťku rohovky měříme pomocí ultrazvukového přístroje – pachymetru. Její znalost je důležitá pro správné vyhodnocení zjištěného nitroočního tlaku u glaukomového onemocnění (zelený zákal). Je nezbytným parametrem i v refrakční chirurgii.'
  }
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
