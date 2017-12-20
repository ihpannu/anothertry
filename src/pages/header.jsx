import React from 'react'
import Link from 'gatsby-link'
import Nav from './nav'
const Header = () => (
  <div>
    <Nav/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Header
