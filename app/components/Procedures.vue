<template>
  <section id="procedures" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        <span class="text-sm font-medium text-gray-700">Komplexní péče</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black tracking-tight mb-4">
        <span class="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Zákroky</span>
        <span class="text-gray-900"> & Vyšetření</span>
      </h2>
      <p class="text-lg text-gray-600">Komplexní oční péče pro celou rodinu</p>
    </div>

    <!-- Procedures Grid -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(procedure, index) in procedures"
        :key="index"
        class="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
      >
        <div class="flex items-start gap-4">
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            :class="procedure.gradient"
          >
            <component :is="procedure.icon" class="w-6 h-6 text-white" />
          </div>
          <p class="text-gray-700 text-sm leading-relaxed">{{ procedure.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

const EyeIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' })
]);

const ClipboardIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' })
]);

const DocumentIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
]);

const BeakerIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
]);

const CheckIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' })
]);

const SearchIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
]);

const DesktopIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
]);

const UsersIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
]);

const procedures = [
  { icon: EyeIcon, gradient: 'bg-gradient-to-br from-teal-400 to-cyan-500', text: 'Komplexní oční vyšetření dětí a dospělých a předpis brýlové korekce' },
  { icon: ClipboardIcon, gradient: 'bg-gradient-to-br from-cyan-400 to-teal-500', text: 'Zhotovení brýlí v naší oční optice' },
  { icon: DocumentIcon, gradient: 'bg-gradient-to-br from-teal-400 to-cyan-500', text: 'Vyšetření a diagnostika chorob předního a zadního očního segmentu (slzné cesty, onemocnění rohovky, šedý zákal, makulární degenerace, glaukom, diabetu, hypertenze a cévních patologií)' },
  { icon: BeakerIcon, gradient: 'bg-gradient-to-br from-cyan-400 to-teal-500', text: 'Vyšetření, předoperační příprava a objednání k operaci katarakty (šedý zákal), glaukom (zelený zákal), sítnice a péče o pacienty po operaci' },
  { icon: CheckIcon, gradient: 'bg-gradient-to-br from-teal-400 to-cyan-500', text: 'Preventivní a vstupní prohlídky, vyšetření na řidičský průkaz, zbrojní průkaz' },
  { icon: SearchIcon, gradient: 'bg-gradient-to-br from-cyan-400 to-teal-500', text: 'Vyšetření na kontaktní čočky a jejich aplikaci, pravidelné kontroly' },
  { icon: DesktopIcon, gradient: 'bg-gradient-to-br from-teal-400 to-cyan-500', text: 'Nadstandardní diagnostická vyšetření (počítačový perimetr, OCT, Pachymetr)' },
  { icon: UsersIcon, gradient: 'bg-gradient-to-br from-cyan-400 to-teal-500', text: 'Léčebné programy očních onemocnění v úzké spolupráci s prestižními očními klinikami' },
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
