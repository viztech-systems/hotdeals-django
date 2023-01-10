import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import DealsPage from "./deals components/DealsPage";
import Footer from "./Footer";

const HomePage = () =>{
    return(
        <>
            <Navbar/>
            <DealsPage/>
            <Footer/>
        </>
    );
}

export default HomePage;