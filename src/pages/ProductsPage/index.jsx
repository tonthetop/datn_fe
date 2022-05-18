import React, { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar'
import ListProduct from '../../components/ListProduct'
import { useLocation, useSearchParams } from 'react-router-dom'
import { productApi } from '../../api'
const ProductsPage = () => {
  let location = useLocation();
  const [products, setProducts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  // single-time read
  useEffect(() => {
    async function fetchData() {
      const filterCode = location.search.split("?q=")[1]

      const params = { filter: filterCode, page: 1, limit: 12, sortBy: "min_price", type: "DEP" }
      const result = await productApi.getProducts(params)
      setProducts(result) 
    }
    fetchData()
  }, [location]);
  useEffect(() => {
    setSearchParams({tuan:"deptrai"})
  }, [searchParams]);
  return (
    <div className="products-wrapper container mt-8">
      <div className="row">
        <div className="col-0 col-md-3">
          <SideBar>
          </SideBar>
        </div>
        <div className="col-md-9 col-xs-12">
          <ListProduct productList={products}></ListProduct>
        </div>
      </div>
    </div>
  )
}

export { ProductsPage }