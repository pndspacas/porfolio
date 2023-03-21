import "../styles/main.css"
import css3 from "../images/css.png"
import html from "../images/html.png"
import js from "../images/js.png"
import react from "../images/react.png"
import photo from "../images/foto.jpg"
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const Images = () => {
    return (
        <Router>
            <div className='main-container' id="home">
                <main>
                    <section className='section-container'>
                        <div className="text-header">
                            <h1>Front-End Developer<span className="wave">👋🏻</span></h1>
                            <div className='text-container'>
                                <p>Hi, I'm Pedro Paças. A Front-end Developer based in Lisbon, Portugal</p>
                                <Link to="https://www.linkedin.com/in/pndspacas/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                                <Link to="https://github.com/pndspacas" target="_blank"><i className="fa-brands fa-github"></i></Link>
                            </div>
                        </div>
                        <img className="main-photo" src={photo} />
                    </section>
                    <div className='images-container'>
                        <div className='span-container'>
                            <span>Tech Stack</span>
                            <span>|</span>
                        </div>
                        <div className="image-container">
                            <div className='image-styles'>
                                <img className="images" src={html} />
                            </div>
                            <div className='image-styles'>
                                <img className="images" src={css3} />
                            </div>
                            <div className='image-styles'>
                                <img className="images" src={js} /></div>
                            <div className='image-styles'>
                                <img className="images" src={react} /></div>
                        </div>
                    </div>
                </main>
            </div>
        </Router >
    )
}

export default Images