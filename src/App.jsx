import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { routes } from '~/routes';
import Loading from '@pages/Loading';

const App = () => (
    <div id="App" className="vw-100 overflow-hidden">
        <Suspense fallback={<Loading />}>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    </div>
);

export default App;
