import React, { useState, useEffect, useRef } from 'react'
import SideBar from '../../components/SideBar'
import ListProduct from '../../components/ListProduct'
import { getParamQueries } from '../../utils/getParamQueries'
import { useLocation, useParams, useNavigate, createSearchParams } from 'react-router-dom'
import { productApi } from '../../api'
import 'antd/dist/antd.css'; import { Pagination, Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
const { Option, OptGroup } = Select;

const ProductCategoryPage = () => {
    const [selectedValue, setSelectedValue] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const newLocation = useLocation()
    const { categoryId } = useParams()
    const currentLocation = useRef({
        location: newLocation,
        categoryId: categoryId
    })
    if (currentLocation.current.location !== newLocation && categoryId !== currentLocation.current.categoryId) {
        currentLocation.current.location = newLocation
        currentLocation.current.categoryId = categoryId
        setSelectedValue("Mặc định")
    }

    let location = useLocation();
    const [products, setProducts] = useState([])
    const [totalRecords, setTotalRecords] = useState()
    //Example how to use it: 
    useEffect(() => {
        async function fetchData() {
            const params = getParamQueries(location);
            params.type = categoryId
            console.log("params fetch productAPI", params)
            const { totalRecords, products } = await productApi.getProducts(params)
            console.log("productCategoryPage", products)
            setProducts(products)
            setTotalRecords(totalRecords)

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
        setSelectedValue(valueSortBy)
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
                <div className="mb-4  d-flex justify-content-end">
                    <FilterOutlined style={{ opacity: "0.5" }} className="me-2 fs-5 d-flex align-items-center" />
                    <Select defaultValue="Mặc định" value={selectedValue} style={{ width: 150 }} onChange={handleChangeSortBy}>
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
                <div className="mb-4 d-flex justify-content-end">
                    <Pagination defaultCurrent={1} current={currentPage} onChange={handleChangePagination} pageSize={limit} total={totalRecords} responsive />
                </div>
            </div>
        </div>
    )
}

export { ProductCategoryPage }