<template>
  <section id="opening-clinic" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span class="text-sm font-medium text-gray-700">Strossmayerovo nám. 977/2</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black tracking-tight mb-4">
        <span class="text-gray-900">Naše</span>
        <span class="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> klinika</span>
      </h2>
      <p class="text-lg text-gray-600">Navštivte nás v srdci Prahy 7</p>
    </div>

    <!-- Main Glass Card -->
    <div class="glass-card rounded-3xl overflow-hidden shadow-2xl">
      <div class="grid lg:grid-cols-2 gap-0">

        <!-- Map -->
        <div class="relative h-72 lg:h-auto lg:min-h-[450px]">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Strossmayerovo%20n%C3%A1m.%20977/2,%20Praha%207+(Videre%202)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Videre 2 - Strossmayerovo nám. 977/2, Praha 7"
            loading="lazy"
            class="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

        <!-- Opening Hours -->
        <div class="p-8 lg:p-10">
          <ClientOnly>
            <template #default>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6" :class="statusBgClass">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="statusColor"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2" :class="statusColor"></span>
                </span>
                <span class="text-sm font-bold" :class="statusTextColor">{{ currentStatus }}</span>
                <span v-if="timeUntilNextChange" class="text-xs text-gray-500">{{ timeUntilNextChange }}</span>
              </div>
            </template>
            <template #fallback>
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl mb-6">
                <span class="text-sm font-bold text-gray-700">Otevírací doba</span>
              </div>
            </template>
          </ClientOnly>

          <div class="space-y-2">
            <div
              v-for="(hours, day) in openingHours"
              :key="day"
              class="flex items-center justify-between p-3 rounded-xl transition-all duration-200"
              :class="getDayRowClass(day)"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                  <span class="text-white font-bold text-xs">{{ getDayInitial(day) }}</span>
                </div>
                <span class="font-semibold text-gray-800">{{ getDayName(day) }}</span>
              </div>
              <span v-if="hours && hours.open && hours.close" class="font-bold text-gray-900">
                {{ hours.open }} - {{ hours.close }}
              </span>
              <span v-else class="font-bold text-gray-400">Zavřeno</span>
            </div>
          </div>

          <!-- Address Card -->
          <div class="mt-8 p-4 bg-white/50 rounded-2xl border border-white/60">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-bold text-gray-900">Strossmayerovo nám. 977/2</p>
                <p class="text-sm text-gray-500">Praha 7, 170 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const openingHours = ref({
  monday: { open: "09:00", close: "15:00" },
  tuesday: { open: "09:00", close: "15:00" },
  wednesday: { open: "09:00", close: "15:00" },
  thursday: { open: "09:00", close: "15:00" },
  friday: { open: "09:00", close: "15:00" },
});

const currentDay = ref("");
const currentStatus = ref("Načítání...");
const statusColor = ref("bg-gray-400");
const statusTextColor = ref("text-gray-600");
const statusBgClass = ref("bg-gray-100");
const timeUntilNextChange = ref("");

let timeInterval = null;

const dayNames = { monday: "Pondělí", tuesday: "Úterý", wednesday: "Středa", thursday: "Čtvrtek", friday: "Pátek" };
const dayInitials = { monday: "Po", tuesday: "Út", wednesday: "St", thursday: "Čt", friday: "Pá" };

const getDayName = (day) => dayNames[day] || day;
const getDayInitial = (day) => dayInitials[day] || day.charAt(0).toUpperCase();

const getDayRowClass = (day) => {
  if (day === currentDay.value) return "bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200";
  return "bg-white/30 hover:bg-white/50";
};

const calculateStatus = () => {
  const now = new Date();
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const currentDayIndex = now.getDay();
  currentDay.value = days[currentDayIndex];

  const todayHours = openingHours.value[currentDay.value];

  if (!todayHours || !todayHours.open || !todayHours.close) {
    currentStatus.value = "Zavřeno";
    statusColor.value = "bg-red-500";
    statusTextColor.value = "text-red-600";
    statusBgClass.value = "bg-red-50";

    for (let i = 1; i <= 7; i++) {
      const checkDay = days[(currentDayIndex + i) % 7];
      const checkHours = openingHours.value[checkDay];
      if (checkHours && checkHours.open) {
        timeUntilNextChange.value = `· ${dayNames[checkDay]} ${checkHours.open}`;
        break;
      }
    }
    return;
  }

  const currentTimeStr = now.toTimeString().slice(0, 5);
  const isOpen = currentTimeStr >= todayHours.open && currentTimeStr < todayHours.close;

  if (isOpen) {
    currentStatus.value = "Otevřeno";
    statusColor.value = "bg-emerald-500";
    statusTextColor.value = "text-emerald-600";
    statusBgClass.value = "bg-emerald-50";
    timeUntilNextChange.value = `· do ${todayHours.close}`;
  } else {
    currentStatus.value = "Zavřeno";
    statusColor.value = "bg-red-500";
    statusTextColor.value = "text-red-600";
    statusBgClass.value = "bg-red-50";

    if (currentTimeStr < todayHours.open) {
      timeUntilNextChange.value = `· otevíráme v ${todayHours.open}`;
    } else {
      timeUntilNextChange.value = `· zítra 09:00`;
    }
  }
};

onMounted(() => {
  calculateStatus();
  timeInterval = setInterval(calculateStatus, 60000);
});

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval);
});
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
