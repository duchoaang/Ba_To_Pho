import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { routes } from '~/routes';
import DefaultLayout from './layout/DefaultLayout';

const App = () => {
    console.log('ok');
    return (
        <div id="App" className="vw-100 overflow-hidden">
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
        </div>
    );
};

export default App;
