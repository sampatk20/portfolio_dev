import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import { Analytics } from "@vercel/analytics/react";
>>>>>>> ef0280ae0560a32e88d46c0bc0135bf9d29cbb3c
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import Contacts from "./Components/Contact";
function App() {
  return (
<<<<<<< HEAD
    <Router>
=======
    
    <Router>
      <Analytics id="prj_UUNeOphcvI3rQcFwQCMt9xTNEfAd">
>>>>>>> ef0280ae0560a32e88d46c0bc0135bf9d29cbb3c
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
<<<<<<< HEAD
=======
      </Analytics>
>>>>>>> ef0280ae0560a32e88d46c0bc0135bf9d29cbb3c
    </Router>
  );
}
export default App;
