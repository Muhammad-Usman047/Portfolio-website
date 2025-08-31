import React from 'react';
import { Link } from 'react-router-dom';
import UsmanImg from '../Image/Usman12.jpeg';

const Home = () => {
  return (
    <div className='home'>
      <div className='content'>
        <h1 className='head'>Introduction</h1>
        <h3 className='subhead'>I am Muhammad Usman</h3>
        <p>
          I am a passionate Front-End Developer with hands-on experience in building responsive and dynamic web interfaces using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and modern frameworks like <strong>React.js</strong>. I write clean, maintainable code and focus on creating intuitive user experiences. <br /><br />
          In addition to front-end development, I have a strong foundation in <strong>Data Structures & Algorithms (DSA)</strong> and <strong>Object-Oriented Programming (OOP)</strong> using <strong>Java</strong>. <br /><br />
          I'm also skilled in <strong>Python</strong> for data analysis, with practical experience using libraries such as <strong>NumPy</strong>, <strong>Pandas</strong>, <strong>Matplotlib</strong>, and <strong>Seaborn</strong> to uncover insights from data and create compelling visualizations.
        </p>
        <p>
          Front-End Developer skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>, with a solid grasp of <strong>DSA</strong>, <strong>OOP (Java)</strong>, and <strong>Python</strong>-based data analysis using <strong>NumPy</strong>, <strong>Pandas</strong>, <strong>Matplotlib</strong>, and <strong>Seaborn</strong>.
        </p>
      </div>
      <div className='imgd'>
        <img
          src={UsmanImg}
          alt="Muhammad Usman smiling and facing the camera in a well-lit indoor setting, wearing casual attire. The background is simple and uncluttered, creating a welcoming and professional atmosphere."
        />
      </div>
    </div>
  )
}

export default Home;
