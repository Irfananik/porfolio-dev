import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams()
    const { project, setProject } = useState([])

    useEffect(() => {
        const url = `project.json/project/${projectId}`
        fetch(url)
            .then((response) => response.json())
            .then(data => setProject(data))
    }, [projectId, setProject])
    
    return (
        <div>
            <div className="">
                <div class="card lg:card-side bg-base-100 shadow-xl my-10">
                    <figure><img src={project?.ss1} alt="Album" /></figure>
                    <figure><img src={project?.ss2} alt="Album" /></figure>
                    <figure><img src={project?.ss3} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{project?.title}</h2>
                        <p>{project?.discription}</p>
                        <button class="btn btn-primary w-64">Live Side</button>
                        <button class="btn btn-primary w-64">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;