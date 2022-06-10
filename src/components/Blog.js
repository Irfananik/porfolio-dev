import React from 'react';

const Blog = () => {
    return (
        <div className="bg-base-200">
            <h1 className="text-5xl font-bold text-center">Blog</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/MgQ28Zw/myportfolio.png" />
                    <div>
                        <h1 className="text-5xl font-bold">Under Maintenance</h1>
                        <button className="btn btn-primary my-3">My Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;