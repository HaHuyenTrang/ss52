import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
    const home=()=>{
        navigate(`/home`)
    }
    const about=()=>{
        navigate(`/about`)
    }
    const contact=()=>{
        navigate(`/contact`)
    }
  return (
    <div>Navbar
        <button onClick={home}>home</button>
        <button onClick={about}>about</button>
        <button onClick={contact}>contact</button>
    </div>
  )
}
