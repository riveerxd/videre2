<template>
  <div>
    <!-- Structured Data for SEO -->
    <Head>
      <Script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": "https://www.videre2.cz/#organization",
              "name": "Videre II s.r.o.",
              "legalName": "Videre II s.r.o.",
              "url": "https://www.videre2.cz",
              "logo": "https://www.videre2.cz/images/logo.png",
              "foundingDate": "2018",
              "email": "videre2.cz@gmail.com",
              "telephone": "+420-739-102-255",
              "priceRange": "$$",
              "taxID": "07098553",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Strossmayerovo nám. 977/2",
                "addressLocality": "Praha 7",
                "postalCode": "170 00",
                "addressRegion": "Praha",
                "addressCountry": "CZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.0994",
                "longitude": "14.4329"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Friday",
                  "opens": "08:00",
                  "closes": "12:00"
                }
              ],
              "medicalSpecialty": [
                "Ophthalmology",
                "Optometry"
              ],
              "availableService": [
                {
                  "@type": "MedicalProcedure",
                  "name": "Komplexní oční vyšetření"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "OCT vyšetření"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Diagnostika glaukomu"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Vyšetření katarakty"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Aplikace kontaktních čoček"
                }
              ],
              "paymentAccepted": "Hotovost, Karta, Zdravotní pojišťovna",
              "currenciesAccepted": "CZK",
              "areaServed": {
                "@type": "City",
                "name": "Praha"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://www.videre2.cz/#website",
              "url": "https://www.videre2.cz",
              "name": "Videre 2",
              "description": "Oční klinika v Praze 7 s profesionální péčí o zrak",
              "publisher": {
                "@id": "https://www.videre2.cz/#organization"
              },
              "inLanguage": "cs-CZ"
            },
            {
              "@type": "WebPage",
              "@id": "https://www.videre2.cz/#webpage",
              "url": "https://www.videre2.cz",
              "name": "Videre 2 | Oční klinika Praha 7 - Profesionální péče o zrak",
              "isPartOf": {
                "@id": "https://www.videre2.cz/#website"
              },
              "about": {
                "@id": "https://www.videre2.cz/#organization"
              },
              "description": "Komplexní oční vyšetření a diagnostika s moderními technologiemi. Spolupracujeme se všemi pojišťovnami.",
              "inLanguage": "cs-CZ"
            }
          ]
        }
      </Script>
    </Head>

    <!-- Main Content with semantic HTML -->
    <main role="main" aria-label="Hlavní obsah">
      <!-- Hero Section -->
      <Hero />
      <OpeningClinic />
      <ContactNews />
      <OurTeam />
      <Procedures />
      <Technologies />
      <Pricing />
      <InsuranceNotice />
    </main>
  </div>
</template>

<script setup>
import Hero from '~/components/Hero.vue'
import OpeningClinic from '~/components/OpeningClinic.vue'
import ContactNews from '~/components/ContactNews.vue'
import OurTeam from '~/components/OurTeam.vue'
import Procedures from '~/components/Procedures.vue'
import Technologies from '~/components/Technologies.vue'
import Pricing from '~/components/Pricing.vue'
import InsuranceNotice from '~/components/InsuranceNotice.vue'

// SEO Meta tags
useHead({
  title: 'Videre 2 | Oční klinika Praha 7 - Profesionální péče o zrak',
  meta: [
    { name: 'description', content: 'Komplexní oční vyšetření, diagnostika glaukomu a katarakty s moderními technologiemi OCT a perimetr. Spolupracujeme se všemi pojišťovnami. Praha 7, Strossmayerovo nám. 977/2.' },
    { name: 'keywords', content: 'oční klinika praha 7, OCT vyšetření, glaukom, katarakta, oční lékař strossmayerovo, Videre 2' }
  ]
})

// Canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://www.videre2.cz/' }
  ]
})
</script> 