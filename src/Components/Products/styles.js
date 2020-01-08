import styled from 'styled-components'

export const ProductListContainer = styled.ul`
  text-align: center;
  list-style: none;
  margin-bottom: 15px;
`
export const ProductListItemLi = styled.li`
  display: inline-block;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin:5px;
  transition: 0.2s ease-in-out;
  width: 250px;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
  img {
    height: 250px;
    width: 250px;
    border-radius: 4px;
    object-fit: cover;
    -o-object-fit: cover;
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`
export const ItemTitle = styled.p`
  font-size: 16px;
  color: #222;
  margin-top: 4px;
`

export const AvaliableButton = styled.button`
  outline: none;
  background-color: #7f5cd4;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  color: #fafafa;
  padding: 10px;
  letter-spacing: 0.8px;
`
export const NotAvaliableButton = styled.button`
  outline: none;
  background-color: #c2c2c2;
  border-radius: 6px;
  border: none;
  cursor: default;
  margin-top: 20px;
  font-size: 16px;
  color: #fafafa;
  padding: 10px;
  letter-spacing: 0.8px;
`

export const ItemPrice = styled.p`
  margin-top: 8px;
  color: green;
  font-size: 16px;
  letter-spacing: 0.4px;
`