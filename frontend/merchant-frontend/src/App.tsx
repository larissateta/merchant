import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Login from './pages/LoginPage'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
