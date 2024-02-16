// Components
import Intro from "../components/Intro"
import Footer from "../components/Footer"
import Portfolio from "../components/Portfolio"
import Timeline from "../components/Timeline"
import Contact from "../components/Contact"
import { Form } from "react-hook-form"


function Home() {
  return (
    <div className="bg-white text-stone-900 min-h-screen font-inter">
      <div className="max-w-5xl w-11/12 mx-auto">{/* added w-11/12 & mx-auto to correct compnent margins */}
        <Intro />
        <Portfolio />
        <Timeline />
        <Form />
        <Footer />
      </div>
    </div>
  )
}

export default Home
