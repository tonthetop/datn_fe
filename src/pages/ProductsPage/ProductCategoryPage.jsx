import React, { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar'
import ListProduct from '../../components/ListProduct'
import { useLocation, useParams,Outlet } from 'react-router-dom'
import { productApi } from '../../api'
const ProductCategoryPage = () => {
    const  {categoryId} = useParams()
    let location = useLocation();
    const [products, setProducts] = useState([])
    const parseQueryString = (location) => {
        const str = location.search;
        const objURL = {};
        str.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function ($0, $1, $2, $3) {
                objURL[$1] = $3;
            }
        );
        return objURL;
    };
    //Example how to use it: 
    useEffect(() => {
        async function fetchData() {
            const  params = parseQueryString(location);
            params.type=categoryId
            const result = await productApi.getProducts(params)
            setProducts(result)
        }
        fetchData()
    }, [location]);

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

export { ProductCategoryPage }