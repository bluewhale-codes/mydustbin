import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './mainComp/Navbar'
import Training from './pages/Training'
import ProfilePage from './pages/ProfilePage'
import UserDashboard from './pages/UserDashboard'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/training" element={<Training/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/dashboard" element={<UserDashboard/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
