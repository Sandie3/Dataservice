import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/monarker">Monarker</NavLink></li>
        <li><NavLink to="/create">Create</NavLink></li>
        <li><NavLink to="/search">Search</NavLink></li>
        <li><NavLink to="/admin">Admin</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/weather">Weather</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav
