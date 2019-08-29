const importView = file => () => import('@/views/' + file + '.vue');
const componentsRouter = [
    {
        path: '/login',
        name: 'Login',
        component: importView('login/index')
    },
    {
        path: '/tos',
        name: 'Tos',
        component: importView('login/tos')
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: importView('login/privacy')
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: importView('login/forgot')
    },
    {
        path: "/video",
        name: "Video",
        component: importView("video/index")
    },
    {
        path: "/answers",
        name: "Answers",
        component: importView("answers/index")
    },
    {
        path: "/resource",
        name: "Resource",
        component: importView("resource/index")
    }
];

export default componentsRouter;