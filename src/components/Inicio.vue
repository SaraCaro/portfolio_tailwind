<template>

    <cabecera/>
    <div class="inicio flex flex-col items-center justify-center h-screen bg-[url(/fondoInicio.jpg)] bg-no-repeat bg-cover">
        <h1 class="text-4xl font-bold mb-8 text-white">Bienvenido a mi portafolio</h1>
        <p class="text-teal-50 mb-12">Soy una desarrolladora WEB apasionada por crear soluciones únicas y efectivas para problemas reales.</p>
        <router-link to="/proyectos">Ver mi trabajo</router-link>
    </div>
    <pie/>

</template>

<script>

import cabecera from './cabecera.vue'
import pie from './pie.vue'

export default {
    components: {
        cabecera,
        pie
    }
}
</script>

<style>


.inicio a{
    position: relative;
    padding: 0.5rem 0.5rem;
    text-decoration: none;
    color: white;
}

.inicio a:link::after,
.inicio a:visited::after,
.inicio a:link::before,
.inicio a:visited::before
{
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.6s ease-in-out;
}

.inicio a:link::after,
.inicio a:visited::after{
    top: 0;
    transform-origin: left;
}

.inicio a:link::before,
.inicio a:visited::before{
    bottom: 0;
    transform-origin: right;
}

.inicio a:hover::after,
.inicio a:hover::before{
    transform: scaleX(1);
}



</style>