import Hero from "../../components/hero/Hero"
import Main from "../../components/main/Main"
import Nav from "../../layout/nav/Nav"
import "./Home.scss"

const Home = () => {
  return (
    <div>
        <Nav/>
        <Hero/> 
        <Main/>
    </div>
  )
}

export default Home