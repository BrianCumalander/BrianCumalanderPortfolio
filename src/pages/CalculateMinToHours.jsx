// Components
import CalcMinToHrs from "../components/CalcMinToHrs"



function Home() {
  return (
    <div className="bg-white text-stone-900 min-h-screen font-inter">
      <div className="max-w-5xl w-11/12 mx-auto">{/* added w-11/12 & mx-auto to correct compnent margins */}
        <CalcMinToHrs />
      </div>
    </div>
  )
}

export default Home
