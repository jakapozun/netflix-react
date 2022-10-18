import React from 'react';
import './HomeScreen.css'
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";

const HomeScreen = () => {
    return (
        <div className={'homeScreen'}>
            <Navbar />
            <Banner />
        </div>
    );
};

export default HomeScreen;