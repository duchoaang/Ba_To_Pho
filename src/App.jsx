import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { routes } from '~/routes';
import DefaultLayout from './layout/DefaultLayout';
import Loading from '@pages/Loading';

const App = () => (
    <div id="App" className="vw-100 overflow-hidden">
        <Suspense fallback={<Loading />}>
            <Routes>
                {routes.map((route, index) => {
                    const Layout = route.layout ? route.layout : DefaultLayout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <route.component />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Suspense>
    </div>
);

export default App;
