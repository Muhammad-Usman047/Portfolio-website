import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about'>
            <div className='content about-content'>
                <div className='about-text'>
                    <h1>About Me</h1>
                    <p>
                        I'm a passionate <strong>Front-End Developer</strong> with solid experience in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>.
                    </p>

                    <p>
                        I also have a solid understanding of <strong>Object-Oriented Programming (Java)</strong> and <strong>Data Structures & Algorithms</strong>, enabling me to approach problem-solving logically and efficiently. In the world of data, I work with <strong>Python</strong> libraries such as <strong>NumPy</strong>, <strong>Pandas</strong>, <strong>Matplotlib</strong>, and <strong>Seaborn</strong> to analyze and visualize data for insights.
                    </p>

                    <p>
                        My goal is to evolve as a skilled <strong>Full Stack Web Developer</strong> and <strong>Data Analyst</strong>, blending technical depth with creative thinking to build real-world solutions.
                    </p>
                </div>
                <div className='about-edu'>
                    <h2>📚 Education</h2>
                    <ul>
                        <li><strong>Matriculation</strong> – KRL</li>
                        <li><strong>FSc (Pre-Engineering)</strong> – KRL</li>
                        <li>
                            <strong>BS in Computer Science</strong> – COMSATS University Islamabad, Wah Cantt Campus <br />
                            <em>Expected Graduation:</em> <strong>2027</strong>
                        </li>
                    </ul>

                    <p>
                        Outside of development, I'm a huge <strong>cricket</strong> enthusiast. The game has taught me patience, discipline, and teamwork — values I bring into both my personal and professional life.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
