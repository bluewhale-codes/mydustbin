import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './mainComp/Navbar'
import Training from './pages/Training'
import ProfilePage from './pages/ProfilePage'
import UserDashboard from './pages/UserDashboard'
import TrainingTask2 from './pages/TrainingTask2'
import './App.css'
import TrainingTask1 from './pages/VideoLearning'
import Task1Dashboard from './pages/Task1Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { VedioTutorial } from './mainComp/VedioTutorial'
import VideoLearning from './pages/VideoLearning'
import WasteManagementWorkshops from './pages/WasteManagementWorkshops'
import Test3 from './pages/Test3'
import { Introduction } from './pages/Introduction'
import HomeBanner from './pages/HomeBanner'
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
        <Route path="/trainingTask2" element={<TrainingTask2/>} />
        <Route path="/trainingTask1" element={<VedioTutorial/>} />
        <Route path="/vedioLearning" element={<VideoLearning/>} />
        <Route path="/task1dashboard" element={<Task1Dashboard/>} />
        <Route path="/workshop" element={<WasteManagementWorkshops/>} />
        <Route path="/test" element={<Test3/>} />
        <Route path="/info" element={<Introduction/>} />
        <Route path="/home" element={<HomeBanner/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
