import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Footer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
