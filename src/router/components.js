const componentsRouter = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index')
    }
];

export default componentsRouter;