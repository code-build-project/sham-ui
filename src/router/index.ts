import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/MainLayout/index.vue'),
            children: [
                {
                    path: '/',
                    name: 'Main',
                    component: () => import('@/pages/Main.vue'),
                },
                {
                    path: '/alert',
                    name: 'PageAlert',
                    component: () => import('@/pages/PageAlert.vue'),
                },
                {
                    path: '/autocomplete',
                    name: 'PageAutocomplete',
                    component: () => import('@/pages/Autocomplete/index.vue'),
                },
                {
                    path: '/button',
                    name: 'PageButton',
                    component: () => import('@/pages/Button/index.vue'),
                },
                {
                    path: '/checkbox',
                    name: 'PageCheckbox',
                    component: () => import('@/pages/Checkbox/index.vue'),
                },
                {
                    path: '/input',
                    name: 'PageInput',
                    component: () => import('@/pages/Input/index.vue'),
                },
                {
                    path: '/select',
                    name: 'PageSelect',
                    component: () => import('@/pages/Select/index.vue'),
                },
            ],
        },
    ],
});

export default router;