import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Home/Hero'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './sections/Login/Login';
import SignUp from './sections/SignUp/SignUp';
<<<<<<< HEAD
import Dashboard from './sections/Dashboard/Dashboard'
import SubmitReport from './sections/Dashboard/submitreport';
=======
import About from './sections/Home/About'
import Contact from './sections/Contact/Contact'
import Complaint from './sections/RegisterComplaint/Complaint'

>>>>>>> d39996e9a1241539bd75d96e036f1353fbf9ce04
const App = () => {
  return (
    <main className='relative'>
    <Router>
      <Routes>
<<<<<<< HEAD
       <Route path="/Login" element={<Login />} />
       <Route path="/SignUp" element={<SignUp />} />
       <Route path="/" element={<Hero />} />
       <Route path='/Dashboard' element={<Dashboard />} />
       <Route path='/submit-report' element={<SubmitReport />} />
=======
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Complaint" element={<Complaint />} />   
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/" element={<Hero />} /> 
>>>>>>> d39996e9a1241539bd75d96e036f1353fbf9ce04
      </Routes>
    </Router>
    </main>
  )
}

export default App