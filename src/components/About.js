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
  I’m a passionate <strong>Full-Stack Developer</strong> with experience in building scalable,
  user-friendly, and efficient web applications. Skilled in front-end development,
  I enjoy turning ideas into functional digital solutions. My expertise spans
  technologies like <strong>JavaScript, React, PHP, and MySQL</strong>, with a strong
  focus on clean code, performance optimization, and intuitive UI.
</p>

<p>
  I thrive in collaborative environments but am equally comfortable taking
  ownership of projects end-to-end. My goal is to keep learning, stay adaptable,
  and contribute to building impactful products that solve real-world problems.
</p>

<p>
  Beyond coding, I’m also a <strong>creative artist</strong> who enjoys drawing and digital sketching — 
  it helps me bring imagination and design thinking into my development work. 
  I’m also a <strong>Taekwondo athlete</strong>, which has taught me discipline, focus, and perseverance — 
  qualities I apply both in life and in my coding journey.
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
