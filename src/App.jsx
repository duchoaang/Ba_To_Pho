import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';

const App = () => {
    return (
        <div id="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
