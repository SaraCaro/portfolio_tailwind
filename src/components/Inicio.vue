<template>

    <cabecera/>
    <div class="inicio flex flex-col items-center justify-center bg-[url(/fondo.jpg)] bg-no-repeat bg-cover">
        <div class="cuadro flex flex-col items-center justify-center text-black bg-white p-8 rounded-md">
            <h1 class="text-4xl font-bold mb-8 font-oswald">Bienvenido a mi portafolio</h1>
            <p class="mb-12 font-karla text-lg">Soy una desarrolladora WEB apasionada por crear soluciones únicas y efectivas para problemas reales.</p>
            
        </div>
        <router-link to="/proyectos">Ver mi trabajo <i class="fa-solid fa-paper-plane"></i></router-link>
    </div>
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

.cuadro{
    opacity: 0.8;
}

.inicio{
    height:91.6vh;
}

.inicio a{
    position: relative;
    padding: 0.5rem 0.5rem;
    margin-top: 3em;
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
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