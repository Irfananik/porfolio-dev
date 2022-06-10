import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = ({project}) => {
    const {id, title, discription, img} = project

    const navigate = useNavigate()

    const handleProjectDetails = id => {
        navigate(`project/${id}`)
    }
    return (
        <div className="">
            <div class="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{discription}</p>
                    <button class="btn btn-primary w-64">Live Side</button>
                    <button onClick={() => handleProjectDetails(id)} class="btn btn-primary w-64">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;