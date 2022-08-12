import React from 'react'

const Data = () => {
    const products=[]
    for(let i=0;i<10000;i++)
    {
        products.push(`Product ${i+1}`)
    }
  return products
}

export default Data