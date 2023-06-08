import Header from '@/Header';
import Footer from '@/Footer';

import Home from '@pages/Home';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="vw-100 overflow-hidden mt-4">{children}</div>
            <Footer />
        </>
    );
};

export default DefaultLayout;
