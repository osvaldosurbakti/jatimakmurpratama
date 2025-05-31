import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsPage from "./pages/Products";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";


// Dummy components for other pages (optional, buat placeholder)

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Tambahkan route lain sesuai kebutuhan */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
