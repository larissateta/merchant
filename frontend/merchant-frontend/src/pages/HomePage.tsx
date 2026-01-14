import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";

const Home = () => {

    return (
        <div>
            <Navbar />

            <div className="pt-12 flex flex-col space-y-8 lg:mx-8 ">
                <HeroSection />

                <ServicesSection/>

            </div>

            <Footer />
        </div>
    );
}

export default Home;