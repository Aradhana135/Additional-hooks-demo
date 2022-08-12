import React from 'react'

const ProductLists = ({products}) => {
  return (
    <>
    {products.map((item)=>(<li key={item}>{item}</li>))}
    </>
  )
}

export default ProductLists