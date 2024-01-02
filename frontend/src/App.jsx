//App.jsx

import Navbar from "./components/Navbar";
import Events from "./components/Events";
import AboutUs from "./components/AboutUs";
import SponsoredBy from "./components/SponsoredBy";
import Footer from "./components/Footer";

import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import IUPC from "./pages/IUPC";
import Hackathon from "./pages/Hackathon";
import DLSprint from "./pages/DLSprint";
import CodeBattle from "./pages/CodeBattle";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/iupc" element={<IUPC/>}></Route>
      <Route path="/hackathon" element={<Hackathon/>}></Route>
      <Route path="/dlsprint" element={<DLSprint/>}></Route>
      <Route path="/codebattle" element={<CodeBattle/>}></Route>
    </Routes>
  );
};

export default App;
