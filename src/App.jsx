
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './pages/Home';
import Weather from './pages/Weather';
import NotFound from './pages/NotFound';



const App = () => (
    <Router>
        <div></div>
        <Routes>
            <Route path='/'         element={<Home />} />
            <Route path='/weather'  element={<Weather />} />
            <Route path='/'         element={<NotFound />} />  
        </Routes>
    </Router>
    
);


export default App;

