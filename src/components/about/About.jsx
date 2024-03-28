import "./About.scss"
import Mareve from "../../assets/images/mareve.png"
import Makeup from "../../assets/images/makeup.png"
import { Container } from "../../utils/Utils"
const About = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default About