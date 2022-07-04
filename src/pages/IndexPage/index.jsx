import React, { useState, useEffect, useLayoutEffect } from "react";
import ListProduct from "../../components/ListProduct";
import BannerProduct from "../../components/Banner/BannerProduct";
import { productApi } from "../../api";
import { useLoading } from "../../hooks/useLoading";
const IndexPage = () => {
  const [bestSellProducts, setBestSellProducts] = useState([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);

  //Example how to use it:
  const [showLoading, hideLoading] = useLoading();
  useEffect(() => {
    async function fetchData() {
      try {
        const params1 = { limit: 8 };
        const params2 = { limit: 8, sortBy: "min_time" };

        showLoading();
        const result1 = await productApi.getProducts(params1);
        const result2 = await productApi.getProducts(params2);
        hideLoading();
        setBestSellProducts(result1.products);
        setNewArrivalProducts(result2.products);
      } catch (error) {
        hideLoading();
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        <h1 className="text-uppercase text-center ">
          <span className="title-banner border-dark ">Danh mục sản phẩm</span>
        </h1>
      </div>
      <BannerProduct></BannerProduct>
      <div className="row mb-3 ">
        <h1 className="text-uppercase text-center">
          <span className="title-banner border-dark">Sản phẩm bán chạy</span>
        </h1>
      </div>
      <ListProduct productList={bestSellProducts}></ListProduct>
      <div className="row mb-3">
        <h1 className="text-uppercase text-center ">
          <span className="title-banner border-dark ">Sản phẩm mới</span>{" "}
        </h1>
        <ListProduct productList={newArrivalProducts}></ListProduct>
      </div>
    </div>
  );
};

export { IndexPage };
