import { Brush, FolderOpenDot, House, User } from 'lucide-react'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className='nav'> 
    <ul>
        <li ><a href='#home'><House size={30} strokeWidth={1.5} color='#000'/></a></li>
        <li> <a href="#about"><User size={30} strokeWidth={1.5} color='#000'/></a></li>
        <li><a href="#skills"><Brush size={30} strokeWidth={1.5} color='#000'/></a></li>
        <li> <a href="#projects"><FolderOpenDot size={30} strokeWidth={1.5} color='#000'/></a></li>
    </ul>
    
   
    
   
    </aside>
  )
}

export default Sidebar
