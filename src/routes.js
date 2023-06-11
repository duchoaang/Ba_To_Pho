import Home from '@pages/Home';
import Upload from '@pages/Upload';
import Documents from '@pages/Documents';
import Detail from '@pages/Detail';

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
];

export { routes };
