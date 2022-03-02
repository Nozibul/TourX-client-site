import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';

const AllRoutes = () => {
    return (
        <>
         <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="services" element={<package />} />
          <Route path="courses" element={<blogs />} />
          <Route path="portfolio" element={<pages />} />*/}
          <Route path="about" element={<About />} /> 
          <Route path="contact" element={<Contact />} />
         
        </Routes>
            
        </>
    );
};

export default AllRoutes;