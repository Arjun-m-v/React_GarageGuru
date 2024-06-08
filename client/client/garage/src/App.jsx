import { useState } from 'react'
import './bootstrap.min.css'
import Home from './pages/Home'
import Service from './pages/Service'
import Customer from './pages/Customer'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-bootstrap'
import Log from './pages/Log'
import Reg from './pages/Reg'

function App() {

  return (
    <>
    <Header/>
    <h1>Garage</h1>
    <Routes>
      <Route path='/' element={<Log/>}/>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/service/:id' element={<Service/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App