import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div style={{
      
    }} className=''>
      <Routes>
        <Route path="/" element = {<Home/>}/>
      </Routes>
    </div>
  )
}

export default App