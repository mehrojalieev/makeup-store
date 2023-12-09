import Hero from "../../components/hero/Hero"
import Main from "../../components/main/Main"
import Footer from "../../layout/footer/Footer"
import Nav from "../../layout/nav/Nav"
import "./Home.scss"

const Home = () => {
  return (
    <div>
        <Nav/>
        <Hero/> 
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home