<template>

    <cabecera/>
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between mt-16">
            <div class="md:w-1/2">
                <img src="../../public/webDeveloper.png" alt="Sobre mí" class="rounded-lg shadow-2xl">
            </div>
            <div class="md:w-1/2 mt-16">
                <h1 class="text-4xl font-bold mb-8 text-black">Sobre mí</h1>
                <p class="text-black mb-12">
                    ¡Hola! Soy Sara, una apasionada desarrolladora web que ha estado estudiando durante dos años. Me encanta la tecnología y siempre estoy buscando nuevas formas de aprender y mejorar mis habilidades.
                    Mi experiencia se centra en el desarrollo web front-end y back-end, y me apasiona crear soluciones efectivas para problemas reales. 
                </p>
                <p>
                    Siempre me esfuerzo por mejorar mis habilidades y mantenerme al día con las últimas tecnologías y tendencias en el campo del desarrollo web.
                    Además de mi amor por la tecnología, disfruto mucho trabajando en equipo y colaborando con otros desarrolladores. Creo que la colaboración es clave para crear soluciones de alta calidad y efectivas.
                    Si necesitas un desarrollador web apasionado y comprometido, <span class="font-bold">¡no dudes en ponerte en contacto conmigo!</span>
                </p>
            </div>
        </div>
    </div>

</template>

<script>

import cabecera from './cabecera.vue'

export default {
    components: {
        cabecera
    }
}
</script>


<style scoped>


</style>
