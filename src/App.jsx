import React from 'react';

import Nav from './components/Nav';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import MovieDetail from './pages/MovieDetail'
// Router
import {Routes,Route,} from "react-router-dom";
function App() {
 
  return (
    <div>
         <Nav/> 

         <Routes>

          <Route path="/" element={<AboutUs/>}></Route>
          <Route path="/work" exact element={<OurWork/>}></Route>
          <Route path="/work/:id" element={<MovieDetail/>}></Route>
          <Route path="contact" element={<ContactUs/>}></Route>
           
           </Routes>
         
    </div> 
  )
}

export default App
