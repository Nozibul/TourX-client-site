import React from 'react';
// import Header from '../Component/Header/Header';
import Banner from '../Component/Banner/Banner';
import FindPage from '../Component/FindPage/FindPage';
import Header from '../Component/Header/Header';
import OurService from '../Component/OurService/OurService';
// import FooterPage from '../Component/FooterPage/FooterPage';



const Home = () => {
    return (
        <>  
            <Header />
            <Banner />
            <FindPage />
            <OurService />
            {/* <FooterPage /> */}
            
        </>
    );
};

export default Home;