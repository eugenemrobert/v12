import "./PortfolioStyles.css"
import Main from "../assets/Blist/Blist1.png"
import Dark from "../assets/Blist/Blist2.png"
import Head from "../assets/Head.png"
import Foot from "../assets/Foot.png"
import PortfolioData from "./PortfolioData";
{/* import Switch1 from "../assets/Blist/Color-switch-dark.png" */}
{/* import Switch2 from "../assets/Blist/Color-switch-light.png" */}

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Our Past Projects</h1>
            <p>Peruse our past works and understand why we are rated highly.</p>


            <PortfolioData
            heading="Blist Ventures"
            text="This was a simple frontend heavy website that we built using HTML, CSS, and JavaScript.
            The unique thing about this project is that we were able to implement the dark mode theme as
            well as the color switcher. 
            For the lovers of aestethic web display, this project would be something that would easily catch
            your eye.
            This project goes on to show that we care about the clients' eyes by virtue of us developing websites
            with a dark mode theme from scratch."
            img1={Main}
            img2={Dark}
            />

            <PortfolioData
            heading="Lordz Gym"
            text="This is a simple frontend heavy website that was also built using HTML, CSS, and JavaScript."
            img1={Head}
            img2={Foot}
            
            />
            
        </div>
    );
};

export default Portfolio;