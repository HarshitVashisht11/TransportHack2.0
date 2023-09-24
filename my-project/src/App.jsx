import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Home/Hero'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './sections/Login/Login';
import SignUp from './sections/SignUp/SignUp';
import About from './sections/Home/About'
import Contact from './sections/Contact/Contact'
import Complaint from './sections/RegisterComplaint/Complaint'

const App = () => {
  return (
    <main className='relative'>
    <Router>
      <Routes>
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Complaint" element={<Complaint />} />   
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/" element={<Hero />} /> 
      </Routes>
    </Router>
    </main>
  )
}

export default App