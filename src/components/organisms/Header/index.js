import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { IconLink, PrimaryNavigation, Block } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1.1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.09);
  box-shadow: -6px 9px 45px 6px rgba(0, 0, 0, 0.1);
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Header = (props) => {
  return (
    <Wrapper reverse {...props}>
      <InnerWrapper>
        <PrimaryNavigation reverse />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
