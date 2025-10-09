import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/jaankei.jpeg`} alt="My Profile" />

        </div>

        {/* Right Side - Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a passionate Full-Stack Developer with experience in building scalable,
            user-friendly, and efficient web applications. Skilled in front-end development,
            I enjoy turning ideas into functional digital solutions. My expertise spans
            technologies like JavaScript, React, PHP, and MySQL, with a strong
            focus on clean code, performance optimization, and intuitive UI.
          </p>

          <p>
            I thrive in collaborative environments but am equally comfortable taking
            ownership of projects end-to-end. My goal is to keep learning, stay adaptable,
            and contribute to building impactful products that solve real-world problems.
          </p>
          <br />
          <br />

          <button id="button">
            <a
              href="https://drive.google.com/file/d/1vwVKfN0odgPDceE2ZNrRVbdPaoYgCwix/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </button>
          <br />
          <br />
          <br />
                    <br />
          <br />
          <br />
                    <br />
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};

export default About;
