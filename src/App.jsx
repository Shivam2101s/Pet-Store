import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Dashboard} from "./Components/Dashboard"
import {Navbar} from "./Components/Navbar"
import {Addpet} from "./Components/Addpet"
import {Editpet} from "./Components/Editpet"
import {Success} from "./Components/Success"

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/add" element={<Addpet />}></Route>
      <Route path="/edit/:id" element={<Editpet />}></Route>
      <Route path="/success" element={<Success/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
