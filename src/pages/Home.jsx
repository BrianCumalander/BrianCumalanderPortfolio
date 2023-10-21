// Components
import Intro from "../components/Intro"
import Footer from "../components/Footer"
import Portfolio from "../components/Portfolio"
import Timeline from "../components/Timeline"
import Contact from "../components/Contact"
 

function Home() {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
