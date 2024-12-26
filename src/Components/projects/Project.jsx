import React from 'react'
import './project.css'
import Footer from '../footer/Footer'
import Slider from './Slider'

function Project() {

  return (
    <div id='projects'>
     <div className='prjContainer'>
     <h2 className='prjHeading'>Projects</h2>
       <Slider/>
       <Footer/>
     </div>
      </div>
    
   
  )
}

export default Project


