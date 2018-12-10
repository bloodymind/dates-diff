import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { Paragraph, Link } from 'components'

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  background-color: #fff;
  padding: 0.6rem 0rem 0.5rem 1rem;
  display: flex;
  justify-content: center;
  border-radius: 4px;
`

const InnerWrapper = styled.div`
  max-width: ${size('maxWidth')};
  width: 100%;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: left;
  margin: 0;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <Credits>
          Made by{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/soufiane-fadil"
          >
            Soufiane Fadil
          </Link>
        </Credits>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Footer
