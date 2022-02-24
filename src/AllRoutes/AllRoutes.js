import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';

const AllRoutes = () => {
    return (
        <>
         <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="services" element={<package />} />
          <Route path="courses" element={<blogs />} />
          <Route path="portfolio" element={<pages />} />
          <Route path="portfolio" element={<about />} />
          <Route path="contact" element={<Contact />} />
         */}
        </Routes>
            
        </>
    );
};

export default AllRoutes;