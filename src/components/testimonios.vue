<template>
    <cabecera/>
    
    <div>
        <h2 class="text-4xl font-bold mt-8 text-center font-oswald">Testimonios</h2>
        <div class="bg-gray-100 py-8 flex flex-row flex-wrap mt-14">
            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil1.jpg" alt="perfil">
                <p class="text-gray-700 text-lg text-center mb-4">
                    "Estoy muy satisfecho con el trabajo de Sara. 
                    Ha sido muy profesional en todo momento y ha entregado el proyecto en el plazo acordado. 
                    Además, su capacidad para resolver problemas y su atención al detalle son impresionantes. 
                    Sin duda, volveré a contratar sus servicios en el futuro."
                </p>
                <p class="text-gray-800 font-semibold text-center text-xl">Aurelio</p>
            </div>
            
            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil2.jpg" alt="perfil">
                <p class="text-gray-700 text-lg text-center mb-4">
                    "Quería mejorar mi presencia en línea y Sara me ha ayudado a conseguirlo. 
                    Me ha diseñado una página web moderna y atractiva, que ha superado mis expectativas. 
                    Además, ha sido muy fácil comunicarme con ella durante todo el proceso. 
                    ¡La recomiendo sin duda alguna!"
                </p>
                <p class="text-gray-800 font-semibold text-center text-xl">Rosa</p>
            </div>

            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil4.png" alt="perfil">
                <p class="text-gray-700 text-lg text-center mb-4">
                    "Trabajar con Sara ha sido una experiencia muy positiva. 
                    Me ha ofrecido soluciones creativas y efectivas para los desafíos técnicos que se presentaron en mi proyecto, y ha demostrado una gran capacidad para adaptarse a mis necesidades. 
                    Además, siempre ha sido muy amable y accesible en todo momento."
                </p>
                <p class="text-gray-800 font-semibold text-center text-xl">Josefina</p>
            </div>

            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil3.png" alt="perfil">
                <p class="text-gray-700 text-lg text-center mb-4">
                    "Quería una página web que reflejara la personalidad de mi marca, y Sara ha conseguido captar perfectamente lo que buscaba. 
                    El diseño de la página es excepcional y la funcionalidad está perfectamente implementada. 
                    En todo momento ha mostrado un gran profesionalismo y su atención al detalle es admirable."
                </p>
                <p class="text-gray-800 font-semibold text-center text-xl">Paco</p>
            </div>
        </div>
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