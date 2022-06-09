import React from 'react';

const Projects = () => {
    return (
        <div className="">
            <h1 className="text-5xl font-bold text-center mt-8">My Projects</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure><img src="https://i.ibb.co/xh3vsfj/list-of-largest-manufacturing-companies-in-the-world-by-revenue-1.png" alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Manufacturing company website</h2>
                    <p>This website create based on manufacturing company website which name is eBikeParts using javaScript library react for fontend. Used for backend- node.js, express.js(node.js framework) and mongodb(database).</p>
                    <button class="btn btn-primary w-64">Live Side</button>
                    <button class="btn btn-primary w-64">See Details</button>
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure><img src="https://i.ibb.co/0rLVZd0/antrepo-icerik-2.png" alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Warehouse management website</h2>
                    <p>This website create based on multiple items warehouse management system which name is eElectronics using javaScript library react for fontend. Used for backend- node.js, express.js(node.js framework) and mongodb(database).</p>
                    <button class="btn btn-primary w-64">Live Side</button>
                    <button class="btn btn-primary w-64">See Details</button>
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure><img src="https://i.ibb.co/K9nsYys/GST-731-36.png" alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Independent service provider website</h2>
                    <p>This website create based on independent service provider which name is techTutor using javaScript library react for fontend.</p>
                    <button class="btn btn-primary w-64">Live Side</button>
                    <button class="btn btn-primary w-64">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;