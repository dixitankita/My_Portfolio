import React from "react";
import "./about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about" >
     
      <div className="hey">
      <h2 className="aboutMe">About Me</h2>
        <motion.h2
          className="headline"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        >
          Code, Creativity, and a Pinch of Fun!
        </motion.h2>

        <motion.div
          className="about_me"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          Hey there! I'm a BCA student, diving deep into the world of full-stack
          web development.I’m fluent in HTML, CSS, JavaScript, and ReactJS.I’m
          always on the hunt to learn more about MERN stack technologies.When I’m
          not crafting clean code or debugging, you’ll probably find me sketching,
          doodling, or dreaming about the perfect UX flow.
        </motion.div>

        <div className="education">
          <div className="eduContainer">
            <h3 className="did">Bachelor of Computer Applications</h3>
            <span className="info">2022 - 2025</span>
          </div>
          <div className="cerContainer">
            <h3 className="did">Full Stack Development</h3>
            <span className="info">By Physics Wallah</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;