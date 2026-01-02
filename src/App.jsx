import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Nav from './components/Nav.jsx';
import Photos from './components/Photos.jsx';
import Footer from './components/Footer.jsx';
import Fun from './components/Fun.jsx';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/fun' element={<Fun/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
