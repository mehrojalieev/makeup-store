import About from "../../components/about/About"
import Brand from "../../components/brands/Brand"
import Hero from "../../components/hero/Hero"
import Main from "../../components/main/Main"
import Review from "../../components/review/Review"
import Footer from "../../layout/footer/Footer"
import Nav from "../../layout/nav/Nav"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
         <Hero/> 
         <Brand/>
        <Main/>
        <About/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Home