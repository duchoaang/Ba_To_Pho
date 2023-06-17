import Empty from './layout/Empty';

import Home from '@pages/Home';
import Upload from '@pages/Upload';
import Documents from '@pages/Documents';
import Detail from '@pages/Detail';
import Admin from '@pages/Admin';
import Profile from '@pages/Profile';

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
        path: '/admin',
        component: Admin,
        layout: Empty,
    },
    {
        path: '/profile',
        component: Profile,
    },
];

export { routes };
