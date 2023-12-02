
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './pages/Home';
<<<<<<< HEAD
import Weather from './pages/Projects/Weather';
import NotFound from './pages/NotFound';
import TomatoCounter from './pages/Projects/TomatoCounter';
=======
// import Footer from './components/Footer';
// import Intro from './components/Intro';
// import Portfolio from './components/portfolio';
// import Timeline from './data/timeline';


>>>>>>> main


const App = () => (
    <Router>
<<<<<<< HEAD
        {/* <div></div> */}
        <Routes>
            <Route path='/'         element={<Home />} />
            <Route path='/projects/weather'  element={<Weather />} />
            <Route path='/projects/tomatocounter'  element={<TomatoCounter />} />
            <Route path='/'         element={<NotFound />} />  
=======
        <Routes>
            <Route path='/' element={<Home />} />
>>>>>>> main
        </Routes>
    </Router>
    //  <div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter'>
    //     <div className='max-w-5xl w-11/12 mx-auto'>
    //         <Intro />
    //         <Portfolio />
    //         <Timeline />
    //         <Contact />
    //         <Footer />
    //     </div>
    // </div>
    
);


export default App;

