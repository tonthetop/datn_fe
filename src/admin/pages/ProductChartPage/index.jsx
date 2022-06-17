import { useEffect, useState } from "react";
import { productApi } from "../../../api/productApi";
import { getCountProductBrand, getCountProductType } from "../../../hooks/useAdminProductChart";
import { DonutProduct } from "./DonutProduct";
import { LineProduct } from "./LineProduct";
function ProductChartPage() {
    const [dataProductType, setDataProductType] = useState({ labels: [], datasets: [] })
    const [dataProductBrand, setDataProductBrand] = useState({ labels: [], datasets: [] })
    useEffect(() => {
        async function fetchData() {
            const result = await getCountProductType()
            const result2 = await getCountProductBrand()
            setDataProductType(result)
            setDataProductBrand(result2)

        }
        fetchData()
    }, [])
    console.log({ dataProductType })
    return (
        <div className='d-flex justify-content-center'
        style={{
            columnGap:"15%"
        }}>
            <div className="w-30">
                <DonutProduct data={dataProductType} />
            </div>
            <div className="w-30">
                <DonutProduct data={dataProductBrand} />

            </div>
        </div>
    )
}
export { ProductChartPage }