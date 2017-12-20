import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {Wrapper, Navigation} from '../styledComponents'
import logo from '../../assets/logo.png'
const Nav = () => (
  <div>
    <Wrapper>
      <Navigation>
        <ul>
          <li>Nav</li>
          <img src="{logo}" alt="Logo"/>
        </ul>
      </Navigation>
    </Wrapper>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Nav
