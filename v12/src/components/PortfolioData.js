import "./PortfolioStyles.css";
import Main from "../assets/Blist/Blist1.png"
import Dark from "../assets/Blist/Blist2.png"
import { Component } from "react";

class PortfolioData extends Component {
    render(){
        return (
            <div className="first-project">
                <div className="project-text">
                    <h2>{this.props.heading}</h2>
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
                    {/* <img alt="img" src={Switch1}/> */}
                    {/* <img alt="img" src={Switch2}/> */}
                </div>
            </div>

        )
    }
}

export default PortfolioData;