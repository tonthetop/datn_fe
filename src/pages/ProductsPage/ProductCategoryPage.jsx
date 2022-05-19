import React, { useState, useEffect, useRef } from 'react'
import SideBar from '../../components/SideBar'
import ListProduct from '../../components/ListProduct'
import { getParamQueries } from '../../utils/getParamQueries'
import { useLocation, useParams, useNavigate, createSearchParams } from 'react-router-dom'
import { productApi } from '../../api'
import 'antd/dist/antd.css'; import { Pagination, Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
const { Option } = Select;

const ProductCategoryPage = () => {
    const [selectedValue, setSelectedValue] = useState()
    const [pageCurrent, setPageCurrent] = useState()
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
            const { totalRecords, products } = await productApi.getProducts(params)
            setProducts(products)
            setTotalRecords(totalRecords)

        }
        fetchData()
    }, [location]);

    console.log(totalRecords)
    const navigate = useNavigate();
    const handleChangePagination = (value) => {
        setPageCurrent(value)
        let params = getParamQueries(location)
        params = { ...params, page: value }
        const search = decodeURIComponent(createSearchParams(params))
        navigate({
            search: `?${search}`
        })
    }
    const handleChangeSortBy = async (valueSortBy) => {
        setSelectedValue(valueSortBy)
        let params = getParamQueries(location)
        params = { ...params, sortBy: valueSortBy }
        const search = decodeURIComponent(createSearchParams(params))
        navigate({
            search: `?${search}`
        })
    }
    return (
        <div className="products-wrapper container mt-8">
            <div className="row">
                <div className="col-0 col-md-3">
                    <SideBar>
                    </SideBar>
                </div>
                <div className="col-md-9 col-xs-12 d-flex flex-column justify-content-between">
                    <div className="mt-5 d-flex justify-content-end">
                        <FilterOutlined className="me-2 fs-5 d-flex align-items-center" />
                        <Select defaultValue="Mặc định" value={selectedValue} style={{ width: 150 }} onChange={handleChangeSortBy}>
                            <Option value="min_price">Giá: Tăng dần</Option>
                            <Option value="max_price">Giá: Giảm dần</Option>
                            <Option value="min_time">Mới nhất</Option>
                            <Option value="max_time">Cũ nhất</Option>
                        </Select>
                    </div>
                    <ListProduct productList={products}></ListProduct>
                    <div className="mb-4 d-flex justify-content-end">
                        <Pagination defaultCurrent={1} onChange={handleChangePagination} pageSize={12} total={totalRecords} responsive />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProductCategoryPage }