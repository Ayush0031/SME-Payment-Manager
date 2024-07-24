import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddEmployee from "./components/AddEmployee";
import AddVendor from "./components/AddVendor";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addemployee" element={<AddEmployee/>} />
        <Route path="/addvendor" element={<AddVendor/>} />
      </Routes>
    </Router>
  );
}

export default App;
