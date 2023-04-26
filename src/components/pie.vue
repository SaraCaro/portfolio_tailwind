<template>
    <footer class="py-4 text-white bg-teal-800 sticky bottom-0 z-10">
        <div id="footerContent" class="px-5">
            <div class="flex flex-row gap-5 justify-center items-center">
                <a id="icons" href="https://twitter.com/" target="_blank" class="px-2 py-1 rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500"><i class="fa-brands fa-twitter scale-150"></i></a>
                <a id="icons" href="https://instagram.com/" target="_blank" class="px-2 py-1 rounded-lg hover:bg-gradient-to-tr from-amber-400 from-10% via-orange-500 via-35% to-purple-600 to-90%"><i class="fa-brands fa-instagram scale-150"></i></a>
                <a id="icons" href="https://facebook.com/" target="_blank" class="px-2 py-1 rounded-lg hover:bg-gradient-to-r from-blue-800 to-blue-500"><i class="fa-brands fa-facebook scale-150"></i></a>
            </div>
        </div>
    </footer>
</template>

<script></script>

<style>
#icons:hover{
    animation: spin 0.4s linear;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
