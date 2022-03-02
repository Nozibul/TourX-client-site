import React from 'react';
import ContactPage from '../Component/ContactPage/ContactPage';
import FooterPage from '../Component/FooterPage/FooterPage';
import Header from '../Component/Header/Header';
import NewsLetter from '../Component/NewsLetter/NewsLetter';
import CommonBanner from '../Component/CommonBanner/CommonBanner';

const Contact = () => {
    return (
        <>
         <Header title="Contact"/>
         <CommonBanner pageTitle="Contact Us"/>
         <ContactPage />
         <NewsLetter />
         <FooterPage />   
        </>
    );
};

export default Contact;