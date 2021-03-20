import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href= {buySHITZ} target="_blank">Buy SHITZ</StyledLink>
      <StyledLink href="https://github.com/BSC-Shitz" target="_blank">GitHub</StyledLink>
      <StyledLink href="https://twitter.com/bscshitz" target="_blank">Twitter</StyledLink>
      <StyledLink href="https://t.me/bscshitz" target="_blank">Telegram</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.grey[400]};
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
`
const buySHITZ ="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xAC3E4FfAF6463736CEf17C2c5B064A17f2472f26";
export default Nav