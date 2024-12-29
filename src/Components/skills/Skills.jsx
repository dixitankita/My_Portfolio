import React from "react";
import "./skills.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandJavascript } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
function Skills() {
  return (
    <div id="skills">
      <div className="techstack">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-container">
          <div className="skill-card">
            <span >
              <AiOutlineHtml5 size={70} color="#fff" className="skillIcon" />
            </span>
            <span>HTML</span>
          </div>
          <div className="skill-card">
           <span> <FaCss3Alt size={70} color="#fff" className="skillIcon" /></span>
            <span>CSS</span>
          </div>
          <div className="skill-card">
           <span> <RiTailwindCssFill size={70} color="#fff" className="skillIcon"/></span>
            <span>TailwindCss</span>
          </div>
          <div className="skill-card">
            <span><TbBrandFramerMotion size={70} color="#fff" className="skillIcon"/></span>
            <span >Framer Motion</span>
          </div>
          <div className="skill-card">
           <span> <FaBootstrap size={70} color="#fff" className="skillIcon" /></span>
            <span>Bootstrap</span>
          </div>
          <div className="skill-card">
            <span><TbBrandJavascript size={70} color="#fff" className="skillIcon" /></span>
            <span>JavaScript</span>
          </div>
          <div className="skill-card">
            <span><FaNodeJs size={70} color="#fff" className="skillIcon" /></span>
            <span>NodeJs</span>
          </div>
          <div className="skill-card">
            <span><FaReact size={70} color="#fff" className="skillIcon"/></span>
            <span>React</span>
          </div>
          <div className="skill-card">
            <span><SiExpress size={70} color="#fff" className="skillIcon"/></span>
            <span>ExpressJS</span>
          </div>
          <div className="skill-card">
           <span> <SiMongodb size={70} color="#fff" className="skillIcon"/></span>
            <span>MongoDB</span>
          </div>
          <div className="skill-card">
            <span><FaGithub size={70} color="#fff" className="skillIcon" /></span>
            <span>github</span>
          </div>
          <div className="skill-card">
          <span>  <VscVscode size={70} color="#fff" className="skillIcon"/></span>
            <span>VsCode</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
