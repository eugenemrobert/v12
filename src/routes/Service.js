import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

function Service () {
    return (
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="https://img.freepik.com/free-photo/flat-lay-photo-office-desk-with-laptop-copy-space-background_1150-45598.jpg?size=626&ext=jpg"
        title="Get to Know What We Do" 
        text="Find out why we do what we do the way we do it"
        btnClass="hide"
        />
        <Project/>
        <Footer/>
        
        </>
    )
}

export default Service;