import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
            <ToastContainer />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
