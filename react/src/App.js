import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from "./strane/Pocetna";
import Register from "./strane/Register";
import Welcome from "./strane/Welcome";
import Zaposleni from "./strane/Zaposleni";
import Prisustva from "./strane/Prisustva";


function App() {


  return (
    <div className="App">

    <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/zaposleni" element={<Zaposleni />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
