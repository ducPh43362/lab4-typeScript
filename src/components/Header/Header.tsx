import React from 'react'
import { NavLink } from 'react-router-dom'

const Header:React.FC = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><NavLink to={`/`}>Home</NavLink></li>
          <li><NavLink to={`/shop`}>Sản phẩm</NavLink></li>
          <li><NavLink to={`/login`}>Login</NavLink></li>
          <li><NavLink to={`/register`}>Register</NavLink></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header