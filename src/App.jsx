import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';

const App = () => {
    return (
        <div id="App">
            <Routes>
                <Route path="/" element={<DefaultLayout />} />
            </Routes>
        </div>
    );
};

export default App;
