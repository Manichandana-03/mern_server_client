import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'

import Create from './components/Create';
import Read from './components/Read';

// import Navbar  from './components/Navbar';
import Update from './components/Update';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
     <Navbar />

     <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/all" element={<Read />} />
      <Route path="/:id" element={<Update />} />
     </Routes>

    </BrowserRouter>
    </>
  )
}

export default App