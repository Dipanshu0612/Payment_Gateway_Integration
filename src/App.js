import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PaymentConfirm from "./Pages/PaymentConfirm";




function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/pay-confirm" element={<PaymentConfirm />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
