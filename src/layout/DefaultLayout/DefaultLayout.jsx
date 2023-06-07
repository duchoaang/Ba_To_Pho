import Header from '@/Header';
import Footer from '@/Footer';
import Home from '@pages/Home';

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
};

export default DefaultLayout;
