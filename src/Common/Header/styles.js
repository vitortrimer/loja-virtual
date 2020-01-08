import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  padding-left: 8px;
  padding-right: 8px;
`

export const Logo = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  color: #222;
  font-size: 28px;
`

export const SearchBarContainer = styled.div`
  background-color: #ededed;
  border-radius: 6px;
  padding: 14px;
  color: #444;
`

export const SearchBar = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  padding-left: 10px;
  font-size: 16px;
  min-width: 280px;
`

export const CartItems = styled.span`
  height: 100px;
  width: 100px;
  background-color: #222;
  border-radius: 50%;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fafafa;
  font-size: 16px;
`

export const UserName = styled.span`
  margin-left: 10px;
  font-size: 16px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
  transition: 0.3s ease-in-out;
`