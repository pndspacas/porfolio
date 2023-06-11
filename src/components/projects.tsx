import "../styles/projects.css"
import { AllProjects } from '../api/AllProjects'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Projects = () => {
    return (
        <Router>
            <div className='project-container' id="projects">
                <div className="project-section">
                    <h2>Projects</h2>
                    <p>Each project is a unique piece of development 🧩</p>
                    <div className="project-flex-container">
                        {AllProjects.map((project) => {
                            return (
                                <div className="projects" key={project.id}>
                                    <div className="projects-card">
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <div className='links'>
                                            <Link to={project.gitHubUrl} target="_blank"><span>Code<i className="fa-brands fa-github"></i>
                                            </span></Link>
                                            <Link to={project.liveDemoUrl} target="_blank"><span>Live Demo<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></span></Link>
                                        </div>
                                    </div>
                                </div>


                            )
                        })}
                    </div>
                </div>
            </div >
        </Router>
    )
}

export default Projects