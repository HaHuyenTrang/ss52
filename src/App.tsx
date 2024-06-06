import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Admin from './components/admin/Admin'
import './App.css'
import Contact from './components/Baitap/Contact'
import About from './components/Baitap/About'
import Navbar from './components/Baitap/Navbar'

export default function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/Baitap/home' element={<Home></Home>}></Route>
        <Route path='/Baitap/contact' element={<Contact></Contact>}></Route>
        <Route path='/Baitap/about' element={<About></About>}></Route>
        <Route path='/Baitap/navbar' element={<Navbar></Navbar>}></Route>



      </Routes>
    </div>
  )
}
