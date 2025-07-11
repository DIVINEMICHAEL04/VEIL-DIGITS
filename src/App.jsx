import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Feature from "./pages/Feature/Feature";
import Pricing from "./pages/Pricing/Pricing";
import Business from "./pages/Business/Business";
import AboutUs from "./pages/About/About_us";
import ContactUsSection from "./pages/Contact/Contact_us";
import Privacy from "./pages/Privacy/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/business" element={<Business />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUsSection />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
