import React, { useState } from 'react'
import {motion} from 'framer-motion'
import './project.css'

import prj1 from "../../assets/docs.png"
import prj2 from "../../assets/anime.png"
import prj3 from "../../assets/login.png"
import prj4 from "../../assets/weatherapp.png"
import prj5 from "../../assets/mind.png"

function Slider() {
    const [positionIndex, setPositionIndex] = useState([0,1,2,3,4])
    const handleNext = () => {
        setPositionIndex((prevIndexes)=>{
            const updatedIndexes = prevIndexes.map( (prevIndex) => (prevIndex + 1) % 5)
            return updatedIndexes
        })
    }

    const images = [
       {src:prj5 , name : "Memory Game" , stack: "React | JavaScript", github: "https://github.com/dixitankita/Memory_Game"},
       {src:prj2 , name : "AnimatedLanding Page" , stack: "Html | CSS | JavaScript", github: "https://github.com/dixitankita/AnimatedLandingPage"},
       {src:prj3 , name : "LoginSignup" , stack: " Nodejs | Express | MongoDB", github: "https://github.com/dixitankita/LoginSignupPage"},
        {src:prj4 , name : "Weather App" , stack: "Html | CSS | JavaScript", github: "https://github.com/dixitankita/weatherApp"},
        {src:prj1 , name : "Docs Mini App" , stack: "React | Framer Motion", github: "https://github.com/dixitankita/Docs."},
    ]

    const position =[
        'center',
        'left1',
        'left',
        'right',
        'right1'
 

    ]
    const imageVariants = {
        center : {x : '0%' , scale :1 , zIndex:5},
        left1 : {x : '-50%' , scale :0.7 , zIndex:2},
        left : {x : '-90%' , scale :0.5 , zIndex:1},
        right : {x : '90%' , scale :0.5 , zIndex:1},
        right1 : {x : '50%' , scale :0.7 , zIndex:2},

    }

  return (
    <div className='sliderDiv'>
     
     <div className="sliderContainer">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="slideItem"
            initial="center"
            animate={position[positionIndex[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
            <img src={image.src} alt={image.name} className="slideImg" />
            {position[positionIndex[index]] === 'center' && (
              <div className="projectInfo">
                <h3>{image.name}</h3>
                <p>{image.stack}</p>
                <a href={image.github} target="_blank" rel="noopener noreferrer" className="githubLink">
                  View on GitHub
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    <button className='nextBtn' onClick={handleNext}>View Next</button>
    </div>
  )
}

export default Slider
