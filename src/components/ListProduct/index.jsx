import React from 'react'
import ProductCard from '../ProductCard'
const ListProduct = ({ productList }) => {
  return (
    <div className="mt-3">
      <div className="row">
        {productList.map((product) => {
          return (
            <ProductCard key={product._id} product={product}></ProductCard>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct