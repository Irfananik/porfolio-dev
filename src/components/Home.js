import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';
import ProjectsLoop from './ProjectsLoop';

const Home = () => {
    return (
        <div>
            <Nav/>
            <Banner/>
            <ProjectsLoop/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;