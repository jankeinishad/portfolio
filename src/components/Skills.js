import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = {
    "Frontend Development": ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
    "Fram works/ Library": ["react.js", "bootstrap","javascript"],
    "Programming Languages": ["Java", "Python", "C"],
    "Tools & Others": ["Git", "GitHub", "VS Code","Tableau","microsoft office","data structure and algorithm","problem solving skills"],
  };

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <p className="skills-intro">
        I have working with a wide range of technologies across front-end, back-end, and design tools.  
        My focus is on writing clean, efficient, and maintainable code.
      </p>

      <div className="skills-container">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div className="skill-card" key={category}>
            <h3>{category}</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
                <br />
          <br />
          <br />
                    <br />
          <br />
          <br />
    </section>
  );
};

export default Skills;
