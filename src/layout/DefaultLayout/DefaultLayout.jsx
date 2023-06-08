import Header from '@/Header';
import Footer from '@/Footer';
import Home from '@pages/Home';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default DefaultLayout;
