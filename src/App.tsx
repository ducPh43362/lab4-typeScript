// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Notfound from './pages/Notfound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Notfound />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
