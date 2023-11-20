import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";

function Home() {
    return (
        <div className="h-screen flex justify-center items-center">
            <h1>Home</h1>
     
       
      <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />

        </div>
    )
}

export default Home
