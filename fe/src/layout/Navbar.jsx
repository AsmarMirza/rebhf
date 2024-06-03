import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/signin"}>SignIn</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Navbar