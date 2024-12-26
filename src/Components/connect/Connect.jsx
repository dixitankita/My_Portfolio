import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import "./connect.css";
function Connect() {
  return (
    <div>
      <ul className="connect">
        <li>
          <a
            href="https://github.com/dixitankita"
            style={{ color: "black" }}
            target="_blank"
          >
            <Github size={20} color="#fff" strokeWidth={2.5} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ankitadixit40"
            style={{ color: "black" }}
            target="_blank"
          >
            <Linkedin size={20} color="#fff"  strokeWidth={2} />
          </a>
        </li>
       
      </ul>
    </div>
  );
}

export default Connect;
