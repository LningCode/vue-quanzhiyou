const componentsRouter = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index')
    },
    {
        path: '/tos',
        name: 'Tos',
        component: () => import('@/views/login/tos')
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('@/views/login/privacy')
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: () => import('@/views/login/forgot')
    }
];

export default componentsRouter;