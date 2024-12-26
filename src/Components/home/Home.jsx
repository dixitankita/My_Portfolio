import React from "react";
import "./home.css";
import me from "../../assets/girl_processed.webp";
import { Download } from "lucide-react";
import Connect from "../connect/connect";

function Home() {
  return (
    
      <div id="home">
        
        <div id="content">
         <div className="picDiv"> <img id="myPic" src={me} alt="" /></div>
         <div className="hello"> <h1 className="name">Ankita Dixit</h1>
          <h3>I'm Full Stack Web Developer.</h3>
          <a
  href="/resume.pdf"
  target="_blank"
  download="DIXIT_ANKITA_resume.pdf"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <button className="btn">
    <span>Resume</span>
    <Download size={20} />
  </button>
</a>
          <Connect/></div>
        </div>
        
      </div>
    
  );
}

export default Home;
