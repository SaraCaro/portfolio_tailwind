<template>

<cabecera/>
<section id="cuerpo">
	<div class="container mx-auto">
		<div class="flex justify-center px-6 mt-28">
			<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				<img
					class="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
					src="../../public/contacto.png"/>
				<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
					<h3 class="pt-4 text-3xl text-center font-bold font-oswald">Contact</h3>
					<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
						<div class="mb-4 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
									Name
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="firstName"
									type="text"
									placeholder="Name"
								/>
							</div>
							<div class="md:ml-2">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
									Last Name
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="lastName"
									type="text"
									placeholder="Last Name"
								/>
							</div>
						</div>
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
								Email
							</label>
							<input
							
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder="Email"
							/>
						</div>
						<div class="mb-12">
							<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
							<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300" placeholder="Leave a comment..."></textarea>
						</div>
						
						<div class="mb-12 text-center">
							<button
								class="bg-teal-600 font-bold hover:bg-teal-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out"
								type="button">
								Send
							</button>
						</div>
						
						<hr class="mb-6 border-t border-gray-300" />
					</form>
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

<style scoped>
#cuerpo {
  position: relative;
  min-height: 73.4vh;
}

</style>