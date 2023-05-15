import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className='nav'>
          <ul>
              <li className='list'><Link className="navItem" to="/">Home</Link></li>
              <li className='list'><Link className="navItem" to="/History">History</Link></li>
          </ul>

      </nav>
      <Outlet />
    </>
  )
}
