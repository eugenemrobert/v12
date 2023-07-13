import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact () {
    return (
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="https://www.capitalfm.co.ke/thesauce/files/2022/04/Woman-on-phone.jpgsss"
        title="Get in touch with us" 
        text="Find out why we do what we do the way we do it"
        btnClass="hide"
        />
        <Footer/>
        
        </>
    )
}

export default Contact;