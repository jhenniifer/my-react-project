import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Whatisgpt from './components/Whatisgpt'
import FeatureOne from './components/FeatureOne'
import FeatureTwo from './components/FeatureTwo'
import Register from './components/Register'
import Blogging from './components/Blogging'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='box text-white mt-2 mt-lg-5' >
      <Nav/>
      <Hero/>
      <Whatisgpt/>
      <FeatureOne/>
      <FeatureTwo />
      <Register/>
      <Blogging/>
      <Footer/>
    </div>
  )
}

export default App
