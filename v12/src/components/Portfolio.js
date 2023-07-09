import "./PortfolioStyles.css"
import Main from "../assets/Blist/Blist1.png"
import Dark from "../assets/Blist/Blist2.png"
import PortfolioData from "./PortfolioData";
{/* import Switch1 from "../assets/Blist/Color-switch-dark.png" */}
{/* import Switch2 from "../assets/Blist/Color-switch-light.png" */}

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Our Past Projects</h1>
            <p>Peruse our past works and understand why we are rated highly.</p>


            <PortfolioData/>
            
        </div>
    );
};

export default Portfolio;