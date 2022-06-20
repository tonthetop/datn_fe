import { useEffect, useState } from "react"
import { LineOrder } from "./LineOrder"
import { Radio } from 'antd';
import moment from "moment";
import { getCountOrderStatus, getCountOrderStatusDonut } from "../../../hooks/useAdminOrderChart";
import { DonutOrder } from "./DonutOrder";

function OrderChartPage() {
    const [data, setData] = useState({ labels: [], datasets: [] })
    const [dataDonut, setDataDonut] = useState({ labels: [], datasets: [] })
    const d = new Date();
    const [option, setOption] = useState(moment(d.setDate(d.getDate() - 7)).format("YYYY-MM-DD"))
    useEffect(() => {
        async function fetchData() {

            const result = await getCountOrderStatus(option, moment(new Date()).format("YYYY-MM-DD"))
            setData(result)
            setDataDonut(getCountOrderStatusDonut())
        }
        fetchData()
    }, [option])
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
                </div>
                <LineOrder data={data} title={"Status Order"}></LineOrder>
            </div>
            <div className="d-flex align-items-center">
                <DonutOrder data={dataDonut} />
            </div>
        </div>
    )
}
export { OrderChartPage }