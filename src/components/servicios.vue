<template>
<cabecera/>

    <div id="services">
        <h2 class="text-4xl font-bold mb-8 mt-8 text-center">Servicios</h2>
        <div class="services-container flex flex-row flex-wrap justify-center items-center text-center">
            <div class="service">
                <i class="fa-solid fa-user"></i>
                <h3>Desarrollador de Front-end</h3>
                <p>Puedo trabajar con HTML, CSS y JavaScript para hacer algunas animaciones en tu página web y hacerla más responsiva</p>
            </div>
            <div class="service">
                <i class="fa-solid fa-code"></i>
                <h3>Diseñadora Web</h3>
                <p>Con los lenguajes de marca soy capaz de hacer diseños bonitos y minimalistas en las páginas web</p>
            </div>
            <div class="service">
                <i class="fa-solid fa-laptop"></i>
                <h3>Técnica de Ordenadores</h3>
                <p>Si tu ordendar está roto o tienes que cambiar cualquier componente, yo puedo ayudarte con eso</p>
            </div>
            <div class="service">
                <i class="fa-brands fa-uncharted"></i>
                <h3>Técnica de Software</h3>
                <p>
                    Yo tengo las herramientas para solucionar problemas con tu software y también puedo instalar sistemas operativos o programas que tu necesites
                </p>
            </div>
        </div>
    </div>


</template>

<script>
import cabecera from './cabecera.vue'

export default {
    components: {
        cabecera,
    }
}
</script>

<style scoped>


.service{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 30vh;
    margin-top: 20px;
    margin-left: 20px;

    /* transicion */
    position: relative;
    background-color: #aca984;
    padding: 2rem;
    color:white;
    z-index: 1;
}

.service i{
    scale: 2;
}

.service::after,
.service::before{
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background-color:  white;
    transition: transform 0.6s ease-in-out;
    transform: scaleX(0);
    z-index: -1;
}


.service::after,
.service::before{
    top:0;
    height: 100%;
}

.service:hover::after,
.service:hover::before{
    transform: scaleX(1);
}
.service:hover{
    color: #979577;
}

.service h3{
    font-size: 2.1em;
    font-weight: 700;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
}


</style>