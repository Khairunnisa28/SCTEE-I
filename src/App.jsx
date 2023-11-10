import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='App'>
        <div className='content'>
          <Routes>
            <Route path='/'/>
            <Route path='/cart'/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App