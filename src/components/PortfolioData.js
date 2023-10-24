import "./PortfolioStyles.css";
import Main from "../assets/Blist/Blist1.png"
import Dark from "../assets/Blist/Blist2.png"
import { Component } from "react";

class PortfolioData extends Component {
    render(){
        return (
            <div className={this.props.className}>
                <div className="project-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.text}
                    </p>
                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                    {/* <img alt="img" src={Switch1}/> */}
                    {/* <img alt="img" src={Switch2}/> */}
                </div>
            </div>

        )
    }
}

export default PortfolioData;