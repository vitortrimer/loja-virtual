import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
`

export const ProductImagePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
    margin-top: 16px;
  img {
    height: 350px;
    width: 350px;
    border-radius: 4px;
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    object-fit: cover;
    -o-object-fit: cover;
  }
`

export const ProductPrice = styled.p`
  color: green;
  font-size: 24px;
  letter-spacing: 0.3px;
`

export const ActionsContainer = styled.div`
  width: 300px;
  margin-left: 32px;
`

export const ProductDescription = styled.span`
  cursor: default;
  letter-spacing: 0.15px;
`

export const ActionButton = styled.button`
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

export const ProductTitle = styled.div`
  font-size: 24px;
  width: 100%;
  font-weight: bold;
  color: #222;
  margin-top: 24px;
  padding-bottom: 8px;
  border-bottom: 1px dashed #444;
  letter-spacing: 0.3px;
  text-align: center;
`