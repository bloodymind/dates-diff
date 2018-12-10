import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 400;
    color: #fff;
    font-size: 1.25rem;
    &.active {
      color: #fff;
      text-decoration: underline;
    }
  }
`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li>
        <Link to="/" exact activeClassName="active">
          Example 1
        </Link>
      </li>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
