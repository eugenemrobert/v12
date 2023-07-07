import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

function Home () {
    return (
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        title="Your Internet Journey Begins Here" 
        text="Step Into a Wonderful World of the WWW"
        buttonText="Development Plan"
        url="/"
        btnClass="show"
        />
        <Portfolio/>
              
        </>
    );
}

export default Home;