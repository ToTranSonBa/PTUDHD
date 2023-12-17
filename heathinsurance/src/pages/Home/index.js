import React from 'react';
import Slide from './Slide';
import ListInsurance from './ListInsurance';
import './home.css';

const Home = () => {
    return (
        <div className="containerHome">
            <Slide></Slide>
            <ListInsurance />
        </div>
    );
};

export default Home;
