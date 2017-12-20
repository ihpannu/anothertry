import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// import {Body} from '../styledComponents'
import styled from 'styled-components'

import './index.css'

const Body = styled.body `
  margin : 0 auto,
  max-width : 960px,
  padding : 0px 1.0875rem 1.45rem,
  padding-top : 0,
`
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Harman Pannu"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Body>
      {children()}
    </Body>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
