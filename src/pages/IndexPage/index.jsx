import React from 'react'
import Carousel from './Carousel'
import ListProduct from '../../components/ListProduct'
import BannerProduct from '../../components/Banner/BannerProduct'
const IndexPage = () => {
  return (
    <div>
      <Carousel></Carousel>
      <BannerProduct></BannerProduct>
      <div className="container">
        <div className="row mb-3 ">
          <h1 className="text-uppercase text-center">
            <span className="title-banner border-dark">
              Sản phẩm bán chạy
            </span>
          </h1>
        </div>
        {/* <ListProduct></ListProduct> */}
      </div>
      <div className="container">
        <div className="row mb-3">
          <h1 className="text-uppercase text-center ">
            <span className="title-banner border-dark ">
              Sản phẩm mới
            </span> </h1>
        </div>
        {/* <ListProduct></ListProduct> */}
      </div>
    </div>
  )
}

export  {IndexPage}