import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Details from './pages/Details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;