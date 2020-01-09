import styled from 'styled-components'

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export const CartTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: default;
  padding-bottom: 8px;
  border-bottom: 1px dashed #999;
  height: auto;
  width: 100%;
  text-align: center;
`

export const CartItemContainer = styled.div`
  margin-top: 4px;
  padding-bottom: 4px;
  display: flex;
  width: 500px;
  border-bottom: 1px solid #bfbfbf;
  img {
    height: 100px;
    width: 100px;
  }
`
export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`

export const TitleSpan = styled.span`
  font-weight: bold;
  letter-spacing: 0.15px;
`

export const PriceSpan = styled.span`
  color: green;
`

export const QuantityInput = styled.input`
  padding: 3px;
  outline: none;
  background-color: #ededed;
  width: 30px;
  border-radius: 4px;
  text-align: right;
`

export const AddItemButton = styled.button`
  outline: none;
  background-color: transparent;
  padding: 3px;
  color: green;
  font-size: 18px;
  cursor: pointer;
`

export const RemoveItemButton = styled.button`
  outline: none;
  background-color: transparent;
  padding: 3px;
  font-size: 18px;
  color: red;
  cursor: pointer;
`
export const RemoveFromCartButton = styled.button`
  margin-top: 4px;
  outline: none;
  background-color: transparent;
  padding: 6px;
  width: auto;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  color: #444;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
  transition: 0.3s ease-in-out;
`