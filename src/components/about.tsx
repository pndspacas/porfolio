import "../styles/about.css"
import about from "../images/about.png"
const About = () => {
    return (
        <div id="about" className='about-container'>
            <div className="about-section">
                <div className="about-image-container">
                    <img src={about} className="about-image" />
                </div>
                <div className='about-text'>
                    <h2>About Me</h2>
                    <p>As a Front-End Developer, I possess an arsenal of skills in <u>HTML</u>, <u>CSS</u>, <u>JavaScript</u> and <u>React</u>.
                        <br></br>
                        I excel in designing and maintaining responsive websites that offer a smooth user experience.
                        <br></br>
                        My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. <br></br>
                        I am also a team player who thrives in collaborating with a cross-functional teams to produce outstanding web applications.</p>

                </div>
            </div>
        </div>
    )
}

export default About