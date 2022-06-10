import React from 'react';

const Projects = ({project}) => {
    const {id, title, discription, img} = project
    return (
        <div className="">
            <div class="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{discription}</p>
                    <button class="btn btn-primary w-64">Live Side</button>
                    <button class="btn btn-primary w-64">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;