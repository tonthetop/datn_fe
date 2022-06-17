import { useEffect, useState } from "react"
import { dataDonutBrand, getCountRevenueByBrand, getCountRevenueByType, getCountRevenueDonutBrand, getCountRevenueDonutType } from "../../../hooks/useAdminRevenueChart"
import { LineRevenue } from "./LineRevenue"
import { Switch, Button, Radio } from 'antd';
import moment from "moment";
import { DonutRevenue } from "./DonutRevenue";

function RevenuePage() {
    const [data, setData] = useState({ labels: [], datasets: [] })
    const [dataDonut, setDataDonut] = useState({ labels: [], datasets: [] })
    const [query, setQuery] = useState(true)
    const d = new Date();
    const [option, setOption] = useState(moment(d.setDate(d.getDate() - 7)).format("YYYY-MM-DD"))
    useEffect(() => {
        async function fetchData() {
            if (query) {
                const result = await getCountRevenueByBrand(option, moment(new Date()).format("YYYY-MM-DD"))
                setData(result)
                setDataDonut(getCountRevenueDonutBrand())
            }
            else {
                const result = await getCountRevenueByType(option, moment(new Date()).format("YYYY-MM-DD"))
                setData(result)
                setDataDonut(getCountRevenueDonutType())

            }
        }
        fetchData()
    }, [query, option])

    const handleSwitch = (value) => {
        if (value) setQuery(true)
        else setQuery(false)

    }
    console.log(option)
    const handleChangeRadio = (e) => {
        const option = e.target.value
        const d = new Date()
        switch (option) {
            case "date":
                setOption(moment(d.setDate(d.getDate() - 1)).format("YYYY-MM-DD"))
                break;
            case "week":
                setOption(moment(d.setDate(d.getDate() - 7)).format("YYYY-MM-DD"))
                break;
            case "month":
                setOption(moment(d.setDate(d.getDate() - 30)).format("YYYY-MM-DD"))
                break;
            case "all":
                setOption("2022-04-30")
                break;
            default:
                break;
        }
    }
    console.log({ dataDonut })
    return (
        <div className='d-flex justify-content-between'>

            <div className='line-chart-revenue w-75 d-flex align-items-end pb-1 flex-column'>
                <div className="d-flex justify-content-between w-100">
                    <Radio.Group defaultValue="week" onChange={handleChangeRadio} size="middle">
                        <Radio.Button value="date">Ngày</Radio.Button>
                        <Radio.Button value="week">Tuần</Radio.Button>
                        <Radio.Button value="month">Tháng</Radio.Button>
                        <Radio.Button value="all">Tất Cả</Radio.Button>
                    </Radio.Group>
                    <Switch className='mb-4' checkedChildren="Brand" size="default" onChange={handleSwitch} unCheckedChildren="Type" defaultChecked />
                </div>
                <LineRevenue data={data} title={query ? "BRAND" : "PRODUCT TYPE"}></LineRevenue>
            </div>
            <div className="d-flex align-items-center">
                <DonutRevenue data={dataDonut} />
            </div>
        </div>
    )
}
export { RevenuePage }