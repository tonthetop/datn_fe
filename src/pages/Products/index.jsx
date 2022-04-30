import React from 'react'
import SideBar from '../../components/SideBar'
import ListProduct from '../../components/ListProduct'
const ProductsPage = () => {
  return (
    <div className="products-wrapper container mt-8">
      <div className="row">
        <div className="col-0 col-md-3">
          {<SideBar>
          </SideBar>}
        </div>
        <div className="col-md-9 col-xs-12">
          <ListProduct></ListProduct>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage