
import "../styles/projects.css"
import github from "../images/github-stalker.png"
import boosted from "../images/boosted.png"
import social from "../images/social.png"
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
                    <div className="projects">
                        <img src={github} />
                        <div className="projects-card">
                            <h3>GitHub Stalker</h3>
                            <p>This is the Github Stalker, allow users to stalker the profiles that they want.</p>
                            <div className='links'>
                                <Link to="https://github.com/pndspacas/github-search" target="_blank"><span>Code<i className="fa-brands fa-github"></i>
                                </span></Link>
                                <Link to="https://github-stalker-api.netlify.app/" target="_blank"><span>Live Demo<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects">

                        <img src={social} />
                        <div className="projects-card">
                            <h3>Social App</h3>
                            <p>A MVP social app website is an online platform that allows users to create, like and delete posts.</p>
                            <div className='links'>
                                <Link to="https://github.com/pndspacas/react-social-app" target="_blank"><span>Code<i className="fa-brands fa-github"></i>
                                </span></Link>
                                <Link to="https://react-social-app-5bef9.web.app/" target="_blank"><span>Live Demo<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects">

                        <img src={boosted} />
                        <div className="projects-card">
                            <h3>Boosted E-commerce</h3>
                            <p>A MPV E-commerce website is an online platform that allows users to buy their favourite sneakers.</p>
                            <div className='links'>
                                <Link to="https://github.com/pndspacas/boosted-ecommerce" target="_blank"><span>Code<i className="fa-brands fa-github"></i>
                                </span></Link>
                                <Link to="https://boosted-ecommerce.netlify.app/" target="_blank"><span>Live Demo<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Projects