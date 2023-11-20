import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            { /* Add other menu items and their corresponding routes here */ }
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          { /* Add other routes for other pages here */ }
        </Switch>
      </div>
    </Router>
  )
}




// my origional content for App.jsx

// import Intro from "./components/Intro"
// import Footer from "./components/Footer"
// import Portfolio from "./components/Portfolio"
// import Timeline from "./components/Timeline"
// import Contact from "./components/Contact"


// function App() {
//   return (

//     <Router>
//       <div>
       
//         <Intro />
//         <Portfolio />
//         <Timeline />
//         <Contact />
//         <Footer />
//       </div>
//     </Router> 
//   )
// }

export default App
