
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './pages/Home';
// import Footer from './components/Footer';
// import Intro from './components/Intro';
// import Portfolio from './components/portfolio';
// import Timeline from './data/timeline';




const App = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
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

