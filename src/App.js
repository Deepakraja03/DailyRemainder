import logo from './logo.svg';
import './App.css';

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