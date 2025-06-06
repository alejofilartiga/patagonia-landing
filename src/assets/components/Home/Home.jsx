import Hero from "./Hero/Hero"
import About from "./About/About"
import Reviews from "./Reviews/Reviews"
import Refuges from "./Refuges/Refuges"
import Features from "./Features/Features"

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Features />  
      <Reviews />
      <Refuges />
    </div>
  )
}

export default Home
