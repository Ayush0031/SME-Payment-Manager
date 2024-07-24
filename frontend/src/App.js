import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddEmployee from "./components/AddEmployee";
import AddVendor from "./components/AddVendor";
import SendEmail from "./components/SendEmail";
import ViewSentEmail from "./components/ViewSentEmail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addemployee" element={<AddEmployee/>} />
        <Route path="/addvendor" element={<AddVendor/>} />
        <Route path="/sendemail" element={<SendEmail/>} />
        <Route path="/viewmails" element={<ViewSentEmail/>} />
      </Routes>
    </Router>
  );
}

export default App;
