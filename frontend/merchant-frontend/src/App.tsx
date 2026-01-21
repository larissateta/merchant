import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import VerificationPage from './pages/VerificationPage'
import { Dashboard } from './pages/Dashboard'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/verify' element={<VerificationPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
