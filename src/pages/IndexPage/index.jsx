import React, { useState, useEffect, useLayoutEffect } from 'react'
import ListProduct from '../../components/ListProduct'
import BannerProduct from '../../components/Banner/BannerProduct'
import { productApi } from '../../api'
import { useLoading } from '../../hooks/useLoading'
const IndexPage = () => {
  const [products, setProducts] = useState([])
  const [totalRecords, setTotalRecords] = useState()
  //Example how to use it: 
  const [showLoading, hideLoading] = useLoading()
  useEffect(() => {
    async function fetchData() {
      try {
        const params = { limit: 8 };
        showLoading()
        const { totalRecords, products } = await productApi.getProducts(params)
        hideLoading()
        setProducts(products)
        setTotalRecords(totalRecords)
      } catch (error) {
        hideLoading()
      }
    }
    fetchData()
  }, []);

  return (
    <div>
      <div className="row">
        <h1 className="text-uppercase text-center ">
          <span className="title-banner border-dark ">
            Danh mục sản phẩm
          </span>
        </h1>
      </div>
      <BannerProduct></BannerProduct>
      <div className="row mb-3 ">
        <h1 className="text-uppercase text-center">
          <span className="title-banner border-dark">
            Sản phẩm bán chạy
          </span>
        </h1>
      </div>
      <ListProduct productList={products}></ListProduct>
      <div className="row mb-3">
        <h1 className="text-uppercase text-center ">
          <span className="title-banner border-dark ">
            Sản phẩm mới
          </span> </h1>
        <ListProduct productList={products}></ListProduct>
      </div>
    </div>
  )
}

export { IndexPage }