
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './pages/Home';
import Weather from './pages/Projects/Weather';
import NotFound from './pages/NotFound';
import TomatoCounter from './pages/Projects/TomatoCounter';


const App = () => (
    <Router>
        {/* <div></div> */}
        <Routes>
            <Route path='/'         element={<Home />} />
            <Route path='/projects/weather'  element={<Weather />} />
            <Route path='/projects/tomatocounter'  element={<TomatoCounter />} />
            <Route path='/'         element={<NotFound />} />  
        </Routes>
    </Router>
    
);


export default App;

