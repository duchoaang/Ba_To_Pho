import Home from '@pages/Home';
import Upload from '@pages/Upload';

import Documents from '@pages/Documents';
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
];

export { routes };
