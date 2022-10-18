import React from 'react';
import './HomeScreen.css'
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import Requests from "../../Requests";

const HomeScreen = () => {
    return (
        <div className={'homeScreen'}>
            <Navbar />
            <Banner />
            <Row title={'Netflix Originals'} isLargeRow={true} fetchUrl={Requests.fetchNetflixOriginals} />
            <Row title={'Trending Now'} fetchUrl={Requests.fetchTrending}/>
            <Row title={'Top Rated'} fetchUrl={Requests.fetchTopRated}/>
            <Row title={'Action Movies'} fetchUrl={Requests.fetchActionMovies} />
            <Row title={'Comedy Movies'} fetchUrl={Requests.fetchComedyMovies}/>
            <Row title={'Horror Movies'} fetchUrl={Requests.fetchHorrorMovies} />
            <Row title={'Romance Movies'} fetchUrl={Requests.fetchRomanceMovies} />
            <Row title={'Documentaries'} fetchUrl={Requests.fetchDocumentaries} />
        </div>
    );
};

export default HomeScreen;