import "./ProjectStyles.css";
import ProjectData from "./ProjectData";
import Project1 from "../assets/11.jpg"
import Project2 from "../assets/2.png"
import Project3 from "../assets/3.jpeg"

function Project(){
    return(
        <div className="project">
            <h1>Recent Projects</h1>
            <p>You can view our other unique recent projects here.</p>
            <div className="projectcard">
                <ProjectData
                image={Project1}
                heading = "Khaqi"
                text="This musician's website serves as our introductory project into the world of 
                coding an artiste's intro and portfolio website. Our flagship artiste website project showcases our 
                prowess in developing relevant website that are customized to the artiste's needs."
                />

<ProjectData
                image={Project2}
                heading="Tujuane"
                text="This musician's website serves as our introductory project into the world of 
                coding an artiste's intro and portfolio website. Our flagship artiste website project showcases our 
                prowess in developing relevant website that are customized to the artiste's needs."
                />

<ProjectData
                image={Project3}
                heading="Andrada Grocery Store"
                text="This musician's website serves as our introductory project into the world of 
                coding an artiste's intro and portfolio website. Our flagship artiste website project showcases our 
                prowess in developing relevant website that are customized to the artiste's needs."
                />
            </div>
        </div>
    );
}

export default Project;