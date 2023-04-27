<template>
    <cabecera/>
    
    <div>
        <h2 class="text-4xl font-bold mt-8 text-center font-oswald">Testimonies</h2>
        <div class="bg-gray-100 py-8 flex flex-row flex-wrap mt-14">
            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil1.jpg" alt="perfil">
                <p class="text-gray-700 text-lg text-center mb-4">
                    "I am very satisfied with Sara's work.
                    She has been very professional at all times and has delivery the project on time.
                    In addition, her capacity to solve problems and her attention to detail are impressive.
                    Without a doubt, I will hire her services again in the future."
                </p>
                <p class="text-gray-800 font-semibold text-center text-xl">Aurelio</p>
            </div>
            
            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil2.jpg" alt="perfil">
                <p class="text-gray-700 text-lg text-center mb-4">
                    "I wanted to improve my online presense and Sara has helped me to achieve it.
                    She has designed a modern and attractive website, which has exceeded my expectations.
                    In addition, it has been very easy to communicate with her throughout the process.
                    I recommend her without a doubt!"
                </p>
                <p class="text-gray-800 font-semibold text-center text-xl">Rose</p>
            </div>

            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil4.png" alt="perfil">
                <p class="text-gray-700 text-lg text-center mb-4">
                    "Trabajar con Sara ha sido una experiencia muy positiva. 
                    Me ha ofrecido soluciones creativas y efectivas para los desafíos técnicos que se presentaron en mi proyecto, y ha demostrado una gran capacidad para adaptarse a mis necesidades. 
                    Además, siempre ha sido muy amable y accesible en todo momento."

                    "Workink with sara has been a positive experience.
                    She has offered me creative and effective solutions for the technical challenges that arose in my project, and has shown a great ability to adapt to my needs.
                    In addition, she has always been very kind and accessible at all times."
                </p>
                <p class="text-gray-800 font-semibold text-center text-xl">Josephine</p>
            </div>

            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil3.png" alt="perfil">
                <p class="text-gray-700 text-lg text-center mb-4">
                    "I wanted a website that reflected the personality of my brand, and Sara has perfectly captured what I was looking for.
                    The design of the website is exceptional and the functionality is perfectly implemented.
                    At all times she has shown great professionalism and her attention to detail is admirable."
                </p>
                <p class="text-gray-800 font-semibold text-center text-xl">Frank</p>
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