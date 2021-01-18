import React from 'react'
import styled from 'styled-components'
import NavigateNext from '@material-ui/icons/NavigateNext'
import Add from '@material-ui/icons/Add'

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: #c292f7;
  color: white;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 1.8rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  text-decoration: none;
  border-radius: 4px;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  ${props =>
    props.leftIcon
      ? 'padding: 0.8rem 1.8rem 0.8rem 0.9rem;'
      : 'padding: 0.8rem 1.8rem;'}

  &:focus {
    outline: none;
  }
`

const StyledNavigateNext = styled(NavigateNext)`
  margin-right: 5px;
`

const StyledAddIcon = styled(Add)`
  margin-right: 5px;
`

const Button = ({
  children,
  arrowLeft,
  addIcon,
  purple = false,
  disabled,
  ...rest
}) => (
    <StyledButton
      purple={purple}
      leftIcon={arrowLeft || addIcon}
      disabled={disabled}
      {...rest}
    >
      {arrowLeft && <StyledNavigateNext />}
      {addIcon && <StyledAddIcon />}
      {children}
    </StyledButton>
  )

export default Button
