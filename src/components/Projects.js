import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      name: "CRM Management System (MERN)",
      description:
        "A full-stack MERN web app to manage customer relationships efficiently, built with React, Node.js, Express, and MongoDB.",
      url: "https://github.com/jankeinishad/MINI-CMR-MERN",
    },
    {
      name: "Pokémon Search App",
      description:
        "A fun web app using JavaScript, HTML, and CSS to search Pokémon data from the PokeAPI.",
      url: "https://github.com/jankeinishad/pokemon_app",
    },
    {
      name: "Phone Number Validator",
      description:
        "A JavaScript-based validation app that checks phone numbers using Regex and displays format correctness.",
      url: "https://github.com/jankeinishad/TelephoneNumbervALIDATION",
    },
    {
      name: "NGO Website (React)",
      description:
        "A responsive NGO website built with React.js, using React Router for seamless navigation.",
      url: "https://github.com/jankeinishad/ngo-website",
    },
    {
      name: "Tribute Page",
      description:
        "A simple yet elegant tribute webpage built using HTML and CSS.",
      url: "https://github.com/jankeinishad/tribut_form",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p className="projects-intro">
        Here are some of the projects I’ve built using various technologies.
        Each project reflects my focus on clean code, creativity, and
        functionality.
      </p>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
