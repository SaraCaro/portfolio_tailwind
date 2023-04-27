<template>
  <nav class="bg-teal-800 p-4 flex justify-between items-center sticky top-0 z-10 font-karla">
    <div class="flex items-center">
      <router-link to="/">
        <img src="../../public/logo.png" alt="Logo" class="w-48 mr-4">
      </router-link>
    </div>
    
    <div class="links md:flex md:items-center md:w-auto" :class="isOpen ? 'block' : 'hidden'" @click.away="isOpen = false">
      <div class="flex flex-row flex-wrap text-sm md:flex-grow">
        <router-link to="/" class="block mt-4 md:inline-block md:mt-0 text-white hover:border-white transition duration-300 ease-in-out border-b-2 border-transparent mr-4 font-bold">
          Home
        </router-link>
        <router-link to="/sobre" class="block mt-4 md:inline-block md:mt-0 text-white hover:border-white transition duration-300 ease-in-out border-b-2 border-transparent mr-4 font-bold">
          About
        </router-link>
        <router-link to="/skills" class="block mt-4 md:inline-block md:mt-0 text-white hover:border-white transition duration-300 ease-in-out border-b-2 border-transparent mr-4 font-bold">
          Skills
        </router-link>
        <router-link to="/proyectos" class="block mt-4 md:inline-block md:mt-0 text-white hover:border-white transition duration-300 ease-in-out border-b-2 border-transparent mr-4 font-bold">
          Projects
        </router-link>
        <router-link to="/servicios" class="block mt-4 md:inline-block md:mt-0 text-white hover:border-white transition duration-300 ease-in-out border-b-2 border-transparent mr-4 font-bold">
          Services
        </router-link>
        <router-link to="/testimonios" class="block mt-4 md:inline-block md:mt-0 text-white hover:border-white transition duration-300 ease-in-out border-b-2 border-transparent mr-4 font-bold">
          Testimonies
        </router-link>
        <router-link to="/contacto" class="block mt-4 md:inline-block md:mt-0 text-white hover:border-white transition duration-300 ease-in-out border-b-2 border-transparent mr-4 font-bold">
          Contact
        </router-link>
      </div>
    </div>

    <div class="flex md:hidden">
      <button type="button" class="text-white hover:border-b focus:outline-none focus:border-b"
              @click="toggleMenu">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M19.95 4.95l-1.4-1.4L12 10.6 5.45 4.05l-1.4 1.4L10.6 12 4.05 18.55l1.4 1.4L12 13.4l6.55 6.55 1.4-1.4L13.4 12l6.55-6.55z"/>
          <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>


<style scoped>

@media screen and (min-width: 768px) {
  .links div a{
    font-size: 1.1em;
  }
}


</style>

