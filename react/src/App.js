import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from "./strane/Pocetna";



function App() {


  return (
    <div className="App">

    <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
