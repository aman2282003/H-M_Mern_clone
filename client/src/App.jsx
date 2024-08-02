import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Dropdown } from "./components/Dropdown";
import { Midd } from "./components/Midd";
import { Footer } from "./components/Footer";
import { Spage } from "./components/Spage";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Dropdown />
      <Routes>
        <Route path="/" element={<Midd />} />
        <Route path="/products/:id" element={<Spage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
