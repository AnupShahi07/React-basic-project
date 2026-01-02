import React from "react";
import "./About.css";

function About() {
  return (
    <div className="back">
      <div className="about-section">
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          I am a BCA graduate and a fresher with an interest in web development.
          I enjoy building simple, useful, and user-friendly web applications.
        </p>

        <p className="about-text">
          This project is built using modern frontend tools and works with
          real-world data. It uses public APIs to fetch real-time currency rates,
          cryptocurrency prices, and free images.
        </p>

        <p className="about-text">
          <strong>Technologies used:</strong> React with Vite, HTML, CSS,
          JavaScript, and public APIs.
        </p>
      </div>
    </div>
  );
}

export default About;
