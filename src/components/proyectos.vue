<template>

    <cabecera/>
    <section class="bg-gray-100 py-10">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center font-oswald">Proyectos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto2.png" alt="Proyecto 2" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">WhatsApp</h3>
            <p class="text-gray-700 mb-4">WhatsApp online creado con node.js</p>
            <a href="https://whatsappsara.onrender.com/" target="_blank" class="bg-teal-600 font-bold hover:bg-teal-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto1.png" alt="Proyecto 1" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">SactusDisk</h3>
            <p class="text-gray-700 mb-4">Tienda Online de CD y discos de vinilo hecho con Scss</p>
            <a href="https://saracaro.github.io/sactusDisk_SASS/" target="_blank" class="bg-teal-600 font-bold hover:bg-teal-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto3.png" alt="Proyecto 3" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">PokeApi</h3>
            <p class="text-gray-700 mb-4">Página de pokemons creada con react y llamando a Api</p>
            <a href="https://pokeapi-3cbc8.web.app/" target="_blank" class="bg-teal-600 font-bold hover:bg-teal-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto4.png" alt="Proyecto 3" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">AngularCrypto</h3>
            <p class="text-gray-700 mb-4">Hecho con angular para ver todas las cryptomonedas</p>
            <a href="https://angularcrypto-591b2.web.app/" target="_blank" class="bg-teal-600 font-bold hover:bg-teal-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto5.png" alt="Proyecto 3" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">ReminderList</h3>
            <p class="text-gray-700 mb-4">Recordatorio de notas con Vue</p>
            <a href="https://saracaro.github.io/reminder_list/" target="_blank" class="bg-teal-600 font-bold hover:bg-teal-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto6.png" alt="Proyecto 3" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">WebPeliculas</h3>
            <p class="text-gray-700 mb-4">Web para buscar peliculas y ver detalles de esta</p>
            <a href="https://webpeliculas.onrender.com/inicio" target="_blank" class="bg-teal-600 font-bold hover:bg-teal-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
    <pie/>
</template>


<script>

import cabecera from './cabecera.vue'
import pie from './pie.vue'

export default {
    components: {
        cabecera,
        pie,
    }
}

</script>

<style>

</style>