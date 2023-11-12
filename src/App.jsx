
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './pages/Home';




const App = () => (
    <Router>
        <div></div>
        <Routes>
            <Route path='/'         element={<Home />} />
        </Routes>
    </Router>
    
);


export default App;

