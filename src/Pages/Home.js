import React from 'react';

import Header from '../Component/Header/Header';
import Banner from '../Component/Banner/Banner';
import FindPage from '../Component/FindPage/FindPage';
import OurService from '../Component/OurService/OurService';
import SingleService from '../Component/SingleService/SingleService';
import FooterPage from '../Component/FooterPage/FooterPage';
import NewsLetter from '../Component/NewsLetter/NewsLetter';
// import UserReview from '../Component/UserReview/UserReview';
import Blogs from '../Component/Blogs/Blogs';


const Home = () => {
    return (
        <>  
            <Header />
            <Banner />
            <FindPage />
            <OurService />
            <SingleService />
            <Blogs />
            {/* <UserReview /> */}
            <NewsLetter />
            <FooterPage />
            
        </>
    );
};

export default Home;