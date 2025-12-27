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
              "@id": "https://www.clinicm.cz/#organization",
              "name": "M Clinic s.r.o.",
              "legalName": "M Clinic s.r.o.",
              "url": "https://www.clinicm.cz",
              "logo": "https://www.clinicm.cz/logo.png",
              "foundingDate": "2020",
              "email": "info@clinicm.cz",
              "telephone": "+420-XXX-XXX-XXX",
              "priceRange": "$$",
              "taxID": "22652540",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Táborská 325/57",
                "addressLocality": "Praha 4",
                "postalCode": "140 00",
                "addressRegion": "Praha",
                "addressCountry": "CZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.062980",
                "longitude": "14.441230"
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
              "@id": "https://www.clinicm.cz/#website",
              "url": "https://www.clinicm.cz",
              "name": "M Clinic",
              "description": "Oční klinika v Praze 4 s profesionální péčí o zrak",
              "publisher": {
                "@id": "https://www.clinicm.cz/#organization"
              },
              "inLanguage": "cs-CZ"
            },
            {
              "@type": "WebPage",
              "@id": "https://www.clinicm.cz/#webpage",
              "url": "https://www.clinicm.cz",
              "name": "M Clinic | Oční klinika Praha 4 - Profesionální péče o zrak",
              "isPartOf": {
                "@id": "https://www.clinicm.cz/#website"
              },
              "about": {
                "@id": "https://www.clinicm.cz/#organization"
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
  title: 'M Clinic | Oční klinika Praha 4 - Profesionální péče o zrak',
  meta: [
    { name: 'description', content: 'Komplexní oční vyšetření, diagnostika glaukomu a katarakty s moderními technologiemi OCT a perimetr. Spolupracujeme se všemi pojišťovnami. Praha 4, Táborská 325/57.' },
    { name: 'keywords', content: 'oční klinika praha 4, OCT vyšetření, glaukom, katarakta, oční lékař táborská' }
  ]
})

// Canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://www.clinicm.cz/' }
  ]
})
</script> 