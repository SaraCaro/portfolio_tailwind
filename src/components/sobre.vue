<template>

    <cabecera/>
    <section id="cuerpo" class="mb-10">
        <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between mt-16">
            <div class="md:w-1/2">
                <img src="../../public/webDeveloper.png" alt="Sobre mí" class="rounded-lg shadow-2xl">
            </div>
            <div class="md:w-1/2 mt-16 font-karla">
                <h1 class="text-4xl font-bold mb-8 text-black font-oswald">About me</h1>
                <p class="text-black mb-12">
                    Hello! I'm Sara, a passionate web developer who has been studying for two years. I love technology and I'm always looking for new ways to learn and improve my skills.
                    My experience focuses on front-end and development, and I'm passionate about creatinf effective solutions for real problems.
                </p>
                <p>

                    I always strive to improve my skills and keep up to date with the latest techonologies and trends in the field of web development.
                    Besides my love for technology, I really enjoy working in a team and collaborating with other developers. I believe that collaboration is key to create high quality and effective solutions.
                    If you need a passionate and committed web developer, <span class="font-bold">don't hesitate to contact me!</span> <i class="fa-solid fa-thumbs-up"></i>
                </p>
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
        pie
    }
}
</script>


<style scoped>
#cuerpo {
  position: relative;
  min-height: 85vh;
}

</style>
