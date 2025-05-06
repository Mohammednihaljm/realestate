import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<h1>home</h1>}/>
      <Route path='property' element={<h1>property</h1>}/>
    </Routes>
      
    </>
  )
}

export default App
