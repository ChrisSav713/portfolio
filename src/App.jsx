import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

import Home from './components/Home'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div className='min-w-screen bg-slate-50 text-slate-800 font-sans pt-16 scroll-pt-16 md:placeholder-slate-200'>
        <Navbar />
        <Home />
        <Resume />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </Router>
  )
}

export default App
