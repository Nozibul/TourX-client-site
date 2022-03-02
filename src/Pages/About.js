import React from 'react';
import Header from '../Component/Header/Header';
import AboutPage from '../Component/AboutPage/AboutPage';
import NewsLetter from '../Component/NewsLetter/NewsLetter';
import FooterPage from '../Component/FooterPage/FooterPage';
import CommonBanner from '../Component/CommonBanner/CommonBanner';

const About = () => {
    return (
        <>
         <Header title="About"/>
         <CommonBanner pageTitle="About Us"/>
         <AboutPage />
         <NewsLetter />
         <FooterPage /> 
        </>
    );
};

export default About;