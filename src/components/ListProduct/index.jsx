import React from 'react'
import ProductCard from '../ProductCard'
const ListProduct = () => {
  return (
    <div className="container">
        <h1>San pham ban chay</h1>
        <div className="row">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

        </div>
    </div>
  )
}

export default ListProduct