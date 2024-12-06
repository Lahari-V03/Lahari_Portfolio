import React from 'react';
import '../Styles/About.css'
import 'primeicons/primeicons.css';

function About() {
    return (<>
        <div className="about-container">
            {/* <div className="profile-picture">
                <img src="/pic.jpg" alt="Profile" />
            </div> */}
            <div className="about-text">
                <h2>ABOUT ME</h2>
                <p className="intro">
                    Hello there! I'm an aspiring full-stack developer and data engineer with a passion for solving complex problems.
                </p>
                <p className="description">
                    Having spent my academic years developing a strong foundation in computer science and engineering, I've developed a deep interest in technology, software development, data and user experience. In my quest for personal and professional growth, I am seeking opportunities where I can contribute to innovative projects and surround myself with like-minded individuals who share my passion for pushing boundaries and driving positive change through technology.
                </p>
                <p className="description">
                    I am constantly learning, eager to take on new challenges, and looking forward to applying my skills in real-world applications.
                </p>
            </div>
            <button className="resume-button">
                <a
                    href="/Lahari_Vuppalapati_Resume.PDF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                >
                    View Resume
                </a>
            </button>
        </div>
        <div className='values-container'>
            <span className='values-text'>The values that drive me</span>
            <div className='value-cards'>
                <div className='card-template'>
                    <span>Collaboration</span>
                    <p>
                        I genuinely believe in the power of teamwork and the strength that shared effort brings. For me, collaboration is about bringing together diverse perspectives to achieve goals more effectively. It’s about mutual support, working together, and ensuring everyone succeeds as a team.
                    </p>
                </div>
                <div className='card-template'>
                    <span>Honesty</span>
                    <p>
                        For me, honesty is the foundation of trust. In both personal and professional settings, I prioritize transparency and fairness in my actions and decisions. I believe that integrity is crucial for building meaningful connections and fostering mutual respect, creating strong, trustworthy relationships with others.
                    </p>
                </div>
            </div>
            <div className='value-cards'>
                <div className='card-template'>
                    <span>Diversity & Inclusion</span>
                    <p>
                        I believe that interacting with people from diverse cultures broadens our perspectives and sparks creativity. I make a conscious effort to connect with individuals from various backgrounds, collaborate, and learn from each other's experiences, enhancing personal growth and fostering mutual understanding.
                    </p>
                </div>
                <div className='card-template'>
                    <span>Time Management</span>
                    <p>
                        I see time as a valuable resource, and managing it effectively is essential for success. I focus on prioritizing tasks, setting realistic goals, and maintaining discipline to stay productive. By balancing deadlines and responsibilities, I ensure steady progress and make the most of every moment.
                    </p>
                </div>
            </div>
        </div>


    </>);
}

export default About;