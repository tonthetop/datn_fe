import React, { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar'
import ListProduct from '../../components/ListProduct'
import { getParamQueries } from '../../utils/getParamQueries'
import { useLocation, useSearchParams, useNavigate, createSearchParams, generatePath } from 'react-router-dom'
import { productApi } from '../../api'
import 'antd/dist/antd.css';
import { Pagination, Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
const { Option } = Select;

const ProductMainPage = () => {
  let location = useLocation();
  const [products, setProducts] = useState([])
  const [totalRecords, setTotalRecords] = useState()
  //Example how to use it: 
  useEffect(() => {
    async function fetchData() {
      const params = getParamQueries(location);
      const { totalRecords, products } = await productApi.getProducts(params)
      setProducts(products)
      setTotalRecords(totalRecords)
    }
    fetchData()
  }, [location]);


  const navigate = useNavigate();

  const handleChangePagination = (value) => {
    let params = getParamQueries(location)
    params = { ...params, page: value }
    const search = decodeURIComponent(createSearchParams(params))
    navigate({
      search: `?${search}`
    })
  }
  const handleChange = async (valueSortBy) => {
    let params = getParamQueries(location)
    params = { ...params, sortBy: valueSortBy }
    console.log(params)
    const search = decodeURIComponent(createSearchParams(params))
    navigate({
      search: `?${search}`
    })
  }
  const limit=getParamQueries(location)?.hasOwnProperty('limit')?getParamQueries(location).limit:12
  return (
      <div className="row">
        <div className="col-0 col-md-3">
          <SideBar>
          </SideBar>
        </div>
        <div className="col-md-9 col-xs-12 d-flex flex-column justify-content-between">
          <div className=" d-flex justify-content-end">
            <FilterOutlined className="me-2 fs-5 d-flex align-items-center" />
            <Select defaultValue="Mặc định" style={{ width: 150 }} onChange={handleChange}>
              <Option value="min_price">Giá: Tăng dần</Option>
              <Option value="max_price">Giá: Giảm dần</Option>
              <Option value="min_time">Mới nhất</Option>
              <Option value="max_time">Cũ nhất</Option>

            </Select>
          </div>
          <ListProduct productList={products}></ListProduct>
          <div className="mb-4 d-flex justify-content-end">
            <Pagination defaultCurrent={1} onChange={handleChangePagination} pageSize={limit} total={totalRecords} responsive />
          </div>
        </div>
      </div>
  )
}

export { ProductMainPage }