import Main from "../assets/Blist/main.png"
import Dark from "../assets/Blist/dark.png"
import Switch1 from "../assets/Blist/Color-switch-dark.png"
import Switch2 from "../assets/Blist/Color-switch-light.png"
import "./PortfolioStyles.css"


const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Our Past Projects</h1>
            <p>Peruse our past works and understand why we are rated highly.</p>

            <div className="first-project">
                <div className="project-text">
                    <h2>Blist Ventures</h2>
                    <p>This was a simple frontend heavy website that we built using HTML, CSS, and JavaScript.
                        The unique thing about this project is that we were able to implement the dark mode theme as
                        well as the color switcher. 
                        For the lovers of aestethic web display, this project would be something that would easily catch
                        your eye.
                        This project goes on to show that we care about the clients' eyes by virtue of us developing websites
                        with a dark mode theme from scratch.
                    </p>
                </div>

                <div className="image">
                    <img alt="img" src={Main}/>
                    <img alt="img" src={Dark}/>
                    <img alt="img" src={Switch1}/>
                    <img alt="img" src={Switch2}/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;