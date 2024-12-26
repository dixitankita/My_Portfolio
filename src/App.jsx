import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/home/Home'
import About from './Components/about/About'
import Footer from './Components/footer/Footer'
import Skills from './Components/skills/Skills'
import Project from './Components/projects/Project'

function App() {
  
  return (
    <>
    
    <div className='pp'>
     <Sidebar/>
    <main>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    </main>
     
   

    </div>
       
        </>
  )
}

export default App
