import "./About.scss"
import Mareve from "../../assets/images/mareve.png"
import Makeup from "../../assets/images/makeup.png"
const About = () => {
  return (
    <>
        <div className="about__card-container">
            <div className="about-card">
                <img src={Mareve} alt="Mareve" />
            </div>
            <div className="about-card">
                <img src={Makeup} alt="MAkeUp" />
            </div>
        </div>
        <div className="makeup__about-wrapper">
            
        </div>
    </>
  )
}

export default About