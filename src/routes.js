import { lazy } from 'react';

const Empty = lazy(() => import('./layout/Empty'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

const Home = lazy(() => import('@pages/Home'));
const Upload = lazy(() => import('@pages/Upload'));
const Documents = lazy(() => import('@pages/Documents'));
const Detail = lazy(() => import('@pages/Detail'));
const Admin = lazy(() => import('@pages/Admin'));
const Profile = lazy(() => import('@pages/Profile'));
const Error = lazy(() => import('@pages/Error'));

const routes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/upload',
        component: Upload,
        layout: DefaultLayout,
    },
    {
        path: '/documents',
        component: Documents,
        layout: DefaultLayout,
    },
    {
        path: '/documents/:id',
        component: Detail,
        layout: DefaultLayout,
    },
    {
        path: '/admin/duyet-bai',
        component: Admin,
        layout: Empty,
    },
    {
        path: '/profile/:id',
        component: Profile,
        layout: DefaultLayout,
    },
    {
        path: '*',
        component: Error,
        layout: Empty,
    },
];

export { routes };
