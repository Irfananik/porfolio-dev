import React, { useEffect, useState } from 'react';
import Projects from './Projects';

const ProjectsLoop = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('project.json')
            .then(response => response.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-8">My Projects</h1>
            <div>
                {
                    projects.map(project => <Projects key={project.id} project={project}/>)
                }
            </div>
        </div>
    );
};

export default ProjectsLoop;