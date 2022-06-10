import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/0J65M0d/myportfolio-removebg-preview.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hi..</h1>
                    <h1 className="text-5xl font-bold mt-2">This is Golam Morshed</h1>
                    <h1 className="text-2xl font-bold mt-2">Web Developer</h1>
                    <p className="py-6">Web developer || Interested in HTML5, CSS3, Bootsrtap5, Tailwind, JavaScript, ES6, React, NodeJs, Expressjs, MongoDb || Enthusiastic about programming</p>
                    <a
                        href="https://drive.google.com/file/d/1FVq1hzHXf1CzYhOoGLeiFc-5TTJ9FTRh/view?usp=sharing"
                        download
                    >
                        <button className="btn btn-primary rounded-lg">My Resume</button>
                    </a>
                    <Link to='/contact'><button className="btn btn-primary rounded-lg ml-2">Contact Me</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;