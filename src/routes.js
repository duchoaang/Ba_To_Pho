import { lazy } from 'react';

const Empty = lazy(() => import('./layout/Empty'));

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
    },
    {
        path: '/upload',
        component: Upload,
    },
    {
        path: '/documents',
        component: Documents,
    },
    {
        path: '/documents/:id',
        component: Detail,
    },
    {
        path: '/admin/duyet-bai',
        component: Admin,
        layout: Empty,
    },
    {
        path: '/profile/:id',
        component: Profile,
    },
    {
        path: '*',
        component: Error,
        layout: Empty,
    },
];

export { routes };
