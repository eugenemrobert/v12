import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact () {
    return (
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="https://cpsns.ns.ca/wp-content/uploads/2021/12/AdobeStock_338472274_sm.jpg"
        title="Get in touch with us" 
        text="Find out why we do what we do the way we do it"
        btnClass="hide"
        />
        
        </>
    )
}

export default Contact;