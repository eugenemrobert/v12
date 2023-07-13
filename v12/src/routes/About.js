import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About () {
    return (
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="https://cpsns.ns.ca/wp-content/uploads/2021/12/AdobeStock_338472274_sm.jpg"
        title="Get to Know About Us" 
        text="Find out why we do what we do the way we do it"
        btnClass="hide"
        />
        <Footer/>
        
        </>
    )
}

export default About;