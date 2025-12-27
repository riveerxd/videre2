<template>
  <section id="opening-clinic" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
    <!-- Section Header -->
    <div class="text-center mb-10">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full border border-purple-200/50 mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        <span class="text-sm font-medium text-purple-700">Strossmayerovo nám. 977/2</span>
      </div>

      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
        <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Naše</span>
        <span class="text-gray-900"> klinika</span>
      </h2>
      <p class="text-lg text-gray-600 font-medium">Navštivte nás v srdci Prahy 7</p>
    </div>

    <!-- Main Content Box -->
    <div class="relative">
      <!-- Decorative blur -->
      <div class="absolute -inset-4 bg-gradient-to-r from-purple-200 via-violet-200 to-purple-200 rounded-[2rem] opacity-30 blur-2xl"></div>

      <div class="relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div class="grid lg:grid-cols-2 gap-0">

          <!-- Left Side - Google Maps -->
          <div class="relative h-80 lg:h-auto lg:min-h-[500px]">
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

          <!-- Right Side - Opening Hours -->
          <div class="p-6 lg:p-10 flex flex-col justify-center">
            <!-- Status Badge -->
            <ClientOnly>
              <template #default>
                <div class="inline-flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-2xl mb-6 self-start">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="statusColor"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3" :class="statusColor"></span>
                  </span>
                  <div>
                    <span class="font-bold" :class="statusTextColor">{{ currentStatus }}</span>
                    <span v-if="timeUntilNextChange" class="text-sm text-gray-500 ml-2">{{ timeUntilNextChange }}</span>
                  </div>
                </div>
              </template>
              <template #fallback>
                <div class="inline-flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-2xl mb-6 self-start">
                  <span class="relative flex h-3 w-3">
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                  </span>
                  <span class="font-bold text-gray-700">Otevírací doba</span>
                </div>
              </template>
            </ClientOnly>

            <!-- Opening Hours List -->
            <div class="space-y-2 mb-8">
              <div
                v-for="(hours, day) in openingHours"
                :key="day"
                class="flex items-center justify-between p-3 rounded-2xl transition-all duration-300"
                :class="getDayRowClass(day)"
              >
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <span class="text-white font-bold text-sm">{{ getDayInitial(day) }}</span>
                  </div>
                  <span class="font-semibold text-gray-800">{{ getDayName(day) }}</span>
                </div>

                <div class="text-right">
                  <div v-if="hours && hours.open && hours.close">
                    <div v-if="hours.splitHours && hours.splitHours.length > 0">
                      <div v-for="(slot, index) in hours.splitHours" :key="index">
                        <span class="font-bold text-gray-900">{{ formatTime(slot.open) }} - {{ formatTime(slot.close) }}</span>
                        <span v-if="slot.description" class="block text-xs text-purple-600 font-medium">{{ slot.description }}</span>
                      </div>
                    </div>
                    <div v-else>
                      <span class="font-bold text-gray-900">{{ formatTime(hours.open) }} - {{ formatTime(hours.close) }}</span>
                    </div>
                  </div>
                  <span v-else class="font-bold text-red-500">Zavřeno</span>
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
import { ref, computed, onMounted, onUnmounted } from "vue";

// Opening hours configuration
const openingHours = ref({
  monday: { open: "09:00", close: "15:00" },
  tuesday: { open: "09:00", close: "15:00" },
  wednesday: { open: "09:00", close: "15:00" },
  thursday: { open: "09:00", close: "15:00" },
  friday: { open: "09:00", close: "15:00" },
});

// Reactive state - will be set on client side
const currentTime = ref(new Date());
const currentDay = ref("");
const currentStatus = ref("Načítání...");
const statusColor = ref("bg-gray-400");
const statusTextColor = ref("text-gray-600");
const timeUntilNextChange = ref("");

let timeInterval = null;

// Get day names in Czech
const dayNames = {
  monday: "Pondělí",
  tuesday: "Úterý",
  wednesday: "Středa",
  thursday: "Čtvrtek",
  friday: "Pátek",
};

// Get day initials
const dayInitials = {
  monday: "Po",
  tuesday: "Út",
  wednesday: "St",
  thursday: "Čt",
  friday: "Pá",
};

// Helper functions
const getDayName = (day) => dayNames[day] || day;
const getDayInitial = (day) => dayInitials[day] || day.charAt(0).toUpperCase();

const formatTime = (time) => {
  if (!time) return "";
  return time;
};

const getDayRowClass = (day) => {
  if (day === currentDay.value) {
    return "bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 shadow-md";
  }
  return "bg-gray-50/50 hover:bg-gray-100/80 border-2 border-transparent";
};

// Calculate current status
const calculateStatus = () => {
  const now = new Date();
  currentTime.value = now;

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDayIndex = now.getDay();
  currentDay.value = days[currentDayIndex];

  const todayHours = openingHours.value[currentDay.value];

  // Check if clinic is closed today
  if (!todayHours || !todayHours.open || !todayHours.close) {
    currentStatus.value = "Dnes máme zavřeno";
    statusColor.value = "bg-red-500";
    statusTextColor.value = "text-red-600";

    // Find next open day
    let nextOpenDay = null;
    let nextOpenTime = null;

    for (let i = 1; i <= 7; i++) {
      const checkDay = days[(currentDayIndex + i) % 7];
      const checkHours = openingHours.value[checkDay];
      if (checkHours && checkHours.open) {
        nextOpenDay = checkDay;
        nextOpenTime = checkHours.open;
        break;
      }
    }

    if (nextOpenDay && nextOpenTime) {
      const dayName = dayNames[nextOpenDay];
      timeUntilNextChange.value = `Otevíráme ${dayName.toLowerCase()} v ${nextOpenTime}`;
    } else {
      timeUntilNextChange.value = "Otevíráme v pondělí v 8:00";
    }
    return;
  }

  const currentTimeStr = now.toTimeString().slice(0, 5);
  
  // Check if clinic is currently open (handling split hours)
  let isCurrentlyOpen = false;
  let nextCloseTime = null;
  let currentSlot = null;

  if (todayHours.splitHours && todayHours.splitHours.length > 0) {
    // Check each time slot
    for (const slot of todayHours.splitHours) {
      if (currentTimeStr >= slot.open && currentTimeStr < slot.close) {
        isCurrentlyOpen = true;
        currentSlot = slot;
        nextCloseTime = slot.close;
        break;
      }
    }
  } else {
    // Single time range
    if (currentTimeStr >= todayHours.open && currentTimeStr < todayHours.close) {
      isCurrentlyOpen = true;
      nextCloseTime = todayHours.close;
    }
  }

  if (isCurrentlyOpen) {
    // Clinic is open
    const closeTimeDate = new Date();
    const [closeHour, closeMinute] = nextCloseTime.split(":");
    closeTimeDate.setHours(parseInt(closeHour), parseInt(closeMinute), 0);

    const timeUntilClose = closeTimeDate.getTime() - now.getTime();
    const hoursUntilClose = Math.floor(timeUntilClose / (1000 * 60 * 60));
    const minutesUntilClose = Math.floor(
      (timeUntilClose % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (hoursUntilClose < 1) {
      // Closing in less than an hour
      currentStatus.value = "Brzy zavíráme";
      statusColor.value = "bg-yellow-500";
      statusTextColor.value = "text-yellow-600";
      timeUntilNextChange.value = `Zavíráme za ${minutesUntilClose} minut`;
    } else {
      // Open normally
      currentStatus.value = "Máme otevřeno";
      statusColor.value = "bg-green-500";
      statusTextColor.value = "text-green-600";
      timeUntilNextChange.value = `Zavíráme za ${hoursUntilClose}h ${minutesUntilClose}m`;
    }
  } else {
    // Clinic is closed
    currentStatus.value = "Máme zavřeno";
    statusColor.value = "bg-red-500";
    statusTextColor.value = "text-red-600";

    // Find next opening time today
    let nextOpenTime = null;
    if (todayHours.splitHours && todayHours.splitHours.length > 0) {
      for (const slot of todayHours.splitHours) {
        if (currentTimeStr < slot.open) {
          nextOpenTime = slot.open;
          break;
        }
      }
    } else if (currentTimeStr < todayHours.open) {
      nextOpenTime = todayHours.open;
    }

    if (nextOpenTime) {
      // Opens later today
      timeUntilNextChange.value = `Otevíráme v ${nextOpenTime}`;
    } else {
      // Opens tomorrow
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowDay = days[tomorrow.getDay()];
      const tomorrowHours = openingHours.value[tomorrowDay];

      if (tomorrowHours && tomorrowHours.open) {
        timeUntilNextChange.value = `Otevíráme zítra v ${tomorrowHours.open}`;
      } else {
        // Find next open day
        let nextOpenDay = null;
        let nextOpenTime = null;

        for (let i = 1; i <= 7; i++) {
          const checkDay = days[(tomorrow.getDay() + i) % 7];
          const checkHours = openingHours.value[checkDay];
          if (checkHours && checkHours.open) {
            nextOpenDay = checkDay;
            nextOpenTime = checkHours.open;
            break;
          }
        }

        if (nextOpenDay && nextOpenTime) {
          const dayName = dayNames[nextOpenDay];
          timeUntilNextChange.value = `Otevíráme ${dayName.toLowerCase()} v ${nextOpenTime}`;
        } else {
          timeUntilNextChange.value = "Otevíráme v pondělí v 8:00";
        }
      }
    }
  }
};

// Client-side only logic
onMounted(() => {
  // Calculate status immediately
  calculateStatus();
  
  // Set up interval to update every minute
  timeInterval = setInterval(calculateStatus, 60000);
});

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
});

// Enhanced SEO meta tags with structured data
useHead({
  title: "Videre 2 | Oční klinika Praha 7 - Otevírací doba a kontakt",
  meta: [
    {
      name: "description",
      content: "Videre 2 - Oční klinika v Praze 7, Strossmayerovo nám. 977/2. Otevírací doba: Po-Pá 9:00-15:00. Profesionální péče o zrak s moderním vybavením. Tel: +420 739 102 255",
    },
    {
      name: "keywords",
      content: "Videre 2, oční klinika Praha 7, otevírací doba, oční vyšetření, Strossmayerovo náměstí, oční lékař Praha, optometrie, vyšetření zraku, kontaktní čočky, brýle",
    },
    {
      name: "author",
      content: "Videre II s.r.o.",
    },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    // Open Graph tags for social media
    {
      property: "og:title",
      content: "Videre 2 | Oční klinika Praha 7 - Otevírací doba"
    },
    {
      property: "og:description",
      content: "Oční klinika v Praze 7 s profesionální péčí o zrak. Otevírací doba: Po-Pá 9:00-15:00. Strossmayerovo nám. 977/2.",
    },
    {
      property: "og:type",
      content: "business.business"
    },
    {
      property: "og:url",
      content: "https://www.videre2.cz/"
    },
    {
      property: "og:site_name",
      content: "Videre 2"
    },
    { 
      property: "og:locale", 
      content: "cs_CZ" 
    },
    // Twitter Card tags
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Videre 2 | Oční klinika Praha 7",
    },
    {
      name: "twitter:description",
      content: "Oční klinika v Praze 7. Otevírací doba: Po-Pá 9:00-15:00. Strossmayerovo nám. 977/2.",
    },
    // Local business SEO
    {
      name: "geo.region",
      content: "CZ-PR",
    },
    {
      name: "geo.placename",
      content: "Praha 7",
    },
    {
      name: "geo.position",
      content: "50.0994;14.4329",
    },
    {
      name: "ICBM",
      content: "50.0994, 14.4329",
    },
    // Enhanced Schema.org structured data
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "name": "Videre 2",
        "alternateName": "Videre II s.r.o.",
        "description": "Oční klinika s lidským přístupem a moderním vybavením v Praze 7. Specializujeme se na komplexní péči o zrak.",
        "url": "https://www.videre2.cz",
        "telephone": "+420739102255",
        "email": "videre2.cz@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Strossmayerovo nám. 977/2",
          "addressLocality": "Praha 7",
          "addressRegion": "Praha",
          "postalCode": "17000",
          "addressCountry": "CZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 50.0994,
          "longitude": 14.4329
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "15:00"
          }
        ],
        "medicalSpecialty": "Ophthalmology",
        "availableService": [
          {
            "@type": "MedicalProcedure",
            "name": "Komplexní oční vyšetření",
            "description": "Kompletní vyšetření zraku a očí"
          },
          {
            "@type": "MedicalProcedure", 
            "name": "Vyšetření očního pozadí",
            "description": "Specializované vyšetření sítnice"
          },
          {
            "@type": "MedicalProcedure", 
            "name": "Předpis brýlí a kontaktních čoček",
            "description": "Optometrické služby"
          }
        ],
        "priceRange": "$$",
        "currenciesAccepted": "CZK",
        "paymentAccepted": ["Cash", "Credit Card"],
        "hasMap": "https://maps.google.com/maps?q=Strossmayerovo+nám.+977/2,+Praha+7"
      })
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.videre2.cz/",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Domů",
            "item": "https://www.videre2.cz/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Otevírací doba",
            "item": "https://www.videre2.cz/#opening-clinic"
          }
        ]
      })
    }
  ]
});
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
