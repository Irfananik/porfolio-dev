import React from 'react';
import Banner from './Banner';
import Nav from './Nav';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Nav/>
            <Banner/>
            <Projects/>
        </div>
    );
};

export default Home;