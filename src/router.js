
import { createRouter, createWebHistory } from 'vue-router';

// va fatto l'import per ogni componente che inseriamo nelle route
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectShow from './pages/ProjectShow.vue';


const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/about-us',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,
        },
        {
            // ":slug" metodo per inserire un parametro
            path: '/projects/:slug',
            name: 'projects.show',
            component: ProjectShow,
        },
    ]
});

export { router };