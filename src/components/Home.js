import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Nav from './Nav';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Nav/>
            <Banner/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;