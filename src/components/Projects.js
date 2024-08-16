import React from 'react';

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <ul className="project-list card-list">
                <li className="project-item paper border shadow shadow-large shadow-hover">
                    <h3>Food Recipes Website</h3>
                    <div className='typewriter'>
                        <p>The website features a diverse collection of recipes sourced from a YouTube channel. It includes multiple sections and pages to showcase these recipes and their associated videos. MongoDB is utilized as the storage solution due to its simplicity and efficiency compared to other options, making it well-suited for managing the recipe and video data.</p>
                    </div>
                    <a className='raise' href="https://github.com/Anushdcosta/AAATaste_Ver_2.0" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </li>
                <li className="project-item paper border shadow shadow-large shadow-hover">
                    <h3>School Database Management System</h3>
                    <p>This Python-based GUI application serves as a prototype for a database management system that efficiently displays student grades. It includes a secure authentication process to ensure that only teachers can access the system. The app offers an intuitive interface for managing and reviewing student performance data, combining ease of use with robust security features to support educational institutions effectively.</p>
                    <a className='raise' href="https://github.com/Anushdcosta/Grade12investigatory" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </li>
            </ul>
        </section>
    );
}

export default Projects;
