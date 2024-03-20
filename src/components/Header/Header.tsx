import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header:React.FC = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><NavLink className={`itemLink`} to={`/`}>Trang chủ</NavLink></li>
          <li><NavLink className={`itemLink`} to={`/shop`}>Sản phẩm</NavLink></li>
          <li><NavLink className={`itemLink`} to={`/login`}>Đăng nhập</NavLink></li>
          <li><NavLink className={`itemLink`} to={`/register`}>Đăng ký</NavLink></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header