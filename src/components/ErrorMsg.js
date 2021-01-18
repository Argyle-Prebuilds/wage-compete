import React from 'react'
import styled from 'styled-components'

const StyledErrorMsg = styled.div`
  border-radius: 5px;
  background-color: rgba(249, 249, 249, 0.9);
  padding: 1.6rem 2rem;
  min-width: 24rem;
  font-size: 1.8rem;
  font-weight: 500;
`

const ErrorMsg = () => (
  <StyledErrorMsg>
    Sorry, this page doesn’t exist. Please, try something else.
  </StyledErrorMsg>
)

export default ErrorMsg
