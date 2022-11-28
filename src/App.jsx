import React from "react";
// components
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <div>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />}></Route>
          <Route path="/work" exact element={<OurWork />}></Route>
          <Route path="/work/:id" element={<MovieDetail />}></Route>
          {/*here /work/:id works as the dynamic url  */}
          <Route path="contact" element={<ContactUs />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
