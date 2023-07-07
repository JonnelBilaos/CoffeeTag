import React from 'react'
import backgroundimg from '../Background.jpg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../../Components/NavBar'

export default function Client () {
    const parentDiv = {
        backgroundImage:`url(${backgroundimg})`,
        height:'100vh',
        backgroundSize: 'cover',
    }
  return (
    <div>
        <div style={parentDiv}>
            <NavBar />
            <div>
                
            </div>
        </div>
    </div>
  )
}
