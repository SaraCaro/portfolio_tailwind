import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import './assets/main.css'
import inicio from './components/Inicio.vue'
import sobre from './components/sobre.vue'
import skills from './components/skills.vue'
import proyectos from './components/proyectos.vue'
import servicios from './components/servicios.vue'
import contacto from './components/contacto.vue'
import testimonios from './components/testimonios.vue'

const routes = [
    { path: '/', component: inicio, name: 'inicio' },
    { path: '/sobre', component: sobre, name: 'sobre' },
    { path: '/skills', component: skills, name: 'skills' },
    { path: '/proyectos', component: proyectos, name: 'proyectos' },
    { path: '/servicios', component: servicios, name: 'servicios' },
    { path: '/contacto', component: contacto, name: 'contacto' },
    { path: '/testimonios', component: testimonios, name: 'testimonios' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
  

const app = createApp(App)
app.use(router)
app.mount('#app')
