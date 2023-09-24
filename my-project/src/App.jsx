import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Home/Hero'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './sections/Login/Login';
import SignUp from './sections/SignUp/SignUp';
import Dashboard from './sections/Dashboard/Dashboard'
import SubmitReport from './sections/Dashboard/submitreport';
const App = () => {
  return (
    <main className='relative'>
    <Router>
      <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/SignUp" element={<SignUp />} />
       <Route path="/" element={<Hero />} />
       <Route path='/Dashboard' element={<Dashboard />} />
       <Route path='/submit-report' element={<SubmitReport />} />
      </Routes>
    </Router>
    </main>
  )
}

export default App