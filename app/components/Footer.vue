<template>
  <!-- Premium Translucent Footer -->
  <footer id="footer" class="relative z-10 bg-white/20 backdrop-blur-xl border-t border-white/30 shadow-lg ">
    <div class="max-w-7xl lg:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <!-- Company Info Column -->
          <div class="space-y-6 text-center lg:text-left">
            <!-- Logo and Company Name -->
            <div class="flex-shrink-0">
            <div class="flex items-center justify-center lg:justify-start">
            <img src="/images/logo.png" alt="Videre 2 - Oční klinika Praha 7" class="w-14 h-9">
            <span class="ml-2 text-3xl font-black bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
              >Videre <span class="text-black">2</span></span
            >
          </div>
          </div>

            <!-- Company Description -->
            <p class="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Precizní péče o zrak s lidským přístupem. Specializujeme se na komplexní oční vyšetření a moderní léčebné metody s nejnovějšími technologiemi.
            </p>


          </div>

          <!-- Contact Information Column -->
          <div class="space-y-8 text-center lg:text-right">
            <div class="space-y-6">
              <!-- Company Details -->
              <div class="text-gray-600 text-base space-y-1 text-center lg:text-right">
                <p class="font-semibold text-gray-800">Videre II s.r.o.</p>
                <p class="text-sm">IČO: 07098553</p>
                <p class="text-sm">Strossmayerovo nám. 977/2</p>
                <p class="text-sm">Praha 7, 170 00</p>
              </div>


            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer Bar -->
      <div class="py-8 border-t border-white/30">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <!-- Copyright -->
          <div class="text-gray-600 text-sm">
            © {{ new Date().getFullYear() }} Videre 2. Všechna práva vyhrazena.
          </div>

          <!-- Made by -->
          <a href="#" class="text-gray-600 hover:text-cyan-600 transition-colors duration-300 text-sm">
            Made by <span class="font-bold text-cyan-600">river</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
