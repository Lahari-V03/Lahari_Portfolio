import React from "react";
import '../Styles/Projects.css'

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-text">
                <h2>Projects</h2>
                <div className="project-card">
                    <h3>Student Performance Analysis</h3>
                    <p>
                        In higher education institutions, graduation rates have been a concern due to various factors
                        such as demographic differences like access to financial aid, etc. The aim of our project was
                        to identify patterns in student achievement and explore ways to improve graduation rates.
                    </p>
                    <div className="tags">
                        <span>Data Analysis</span>
                        <span>Python</span>
                        <span>Pandas</span>
                        <span>Matplotlib</span>
                        <span>Machine Learning</span>
                    </div>
                    <a href="https://github.com/Lahari-V03/ml_mini_project" target="_blank" className="btn">View on GitHub</a>
                </div>
                <div className="project-card">
                    <h3>E-commerce Website</h3>
                    <p>
                        Built a full-stack application as part of a team to develop an e-commerce platform with basic functionality.
                        The application allows users to browse products, add them to a cart, and proceed with the checkout process.
                    </p>
                    <div className="tags">
                        <span>React</span>
                        <span>MongoDB</span>
                        <span>Express</span>
                        <span>Node.js</span>
                        <span>Bootstrap</span>
                    </div>
                    <a href="https://github.com/Lahari-V03/mini_project_fs" target="_blank" className="btn">View on GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;

