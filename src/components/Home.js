import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import ProjectsLoop from './ProjectsLoop';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <ProjectsLoop/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;