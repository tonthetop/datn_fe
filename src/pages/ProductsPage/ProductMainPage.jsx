import React, { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar'
import ListProduct from '../../components/ListProduct'
import { getParamQueries } from '../../utils/getParamQueries'
import { useLocation, useNavigate, createSearchParams, generatePath } from 'react-router-dom'
import { productApi } from '../../api'
import 'antd/dist/antd.css';
import { Pagination, Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useLoading } from '../../hooks/useLoading'
const { Option, OptGroup } = Select;

const ProductMainPage = () => {
  let location = useLocation();
  const [products, setProducts] = useState([])
  const [totalRecords, setTotalRecords] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  //Example how to use it: 
  const [showLoading, hideLoading] = useLoading()
  useEffect(() => {
    async function fetchData() {
      try {
        const params = getParamQueries(location);
        showLoading()
        const { totalRecords, products } = await productApi.getProducts(params)
        hideLoading()
        setProducts(products)
        setTotalRecords(totalRecords)
        setCurrentPage(params.page);
      } catch (error) {
        hideLoading()

      }

    }
    fetchData()
  }, [location]);


  const navigate = useNavigate();

  const handleChangePagination = (value) => {
    setCurrentPage(value);
    let params = getParamQueries(location)
    params = { ...params, page: value }
    const search = decodeURIComponent(createSearchParams(params))
    navigate({
      search: `?${search}`
    })
  }
  const handleChangeSortBy = async (valueSortBy) => {
    setCurrentPage(1);
    let params = getParamQueries(location)
    params = { ...params, sortBy: valueSortBy }
    if (params.hasOwnProperty('page')) delete params.page
    const search = decodeURIComponent(createSearchParams(params))
    navigate({
      search: `?${search}`
    })
  }
  const limit = getParamQueries(location)?.hasOwnProperty('limit') ? getParamQueries(location).limit : 12

  return (
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <SideBar setCurrentPage={setCurrentPage}>
        </SideBar>
      </div>
      <div className="col-md-9 col-xs-12 d-flex flex-column justify-content-between">
        <div>
          <div className="mb-4 d-flex justify-content-end">
            <FilterOutlined style={{ opacity: "0.5" }} className="me-2 fs-5 d-flex align-items-center" />
            <Select defaultValue="Mặc định" style={{ width: 150 }} onChange={handleChangeSortBy}>
              <OptGroup label="Theo giá">
                <Option value="min_price">Giá: Tăng dần</Option>
                <Option value="max_price">Giá: Giảm dần</Option>
              </OptGroup>
              <OptGroup label="Theo ngày">
                <Option value="min_time">Ngày: Mới nhất</Option>
                <Option value="max_time">Ngày: Cũ nhất</Option>
              </OptGroup>
            </Select>
          </div>
          <ListProduct productList={products}></ListProduct>
        </div>
        <div className="d-flex justify-content-end">
        <Pagination simple current={currentPage} defaultCurrent={1} onChange={handleChangePagination} pageSize={limit} total={totalRecords} responsive />
        </div>
      </div>
    </div>
  )
}

export { ProductMainPage }