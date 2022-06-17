import { faker } from "@faker-js/faker";
import { orderApi, productApi } from "../api";
import moment from "moment";

function dateRangeGenerate(startDate, endDate, steps = 1) {
    const dateArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        dateArray.push(new Date(currentDate));
        // Use UTC date to prevent problems with time zones and DST
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }

    return dateArray;
}
const color={
    typeOne:{
        border:faker.color.rgb(),
        background:faker.color.rgb()
    },
    typeTwo:{
        border:faker.color.rgb(),
        background:faker.color.rgb()
    },
    typeThree:{
        border:faker.color.rgb(),
        background:faker.color.rgb()
    }
}
export const dataDonutBrand = []
export const dataDonutType = []
export const getCountRevenueByBrand = async (startDate, endDate) => {
    {
        try {
            const dateRange = startDate + "--" + endDate
            const resultAll = await orderApi.countRevenue({ dateRange })
            const resultBrandAdidas = await orderApi.countRevenue({ dateRange, type: "brand", value: "ADIDAS" })
            const resultBrandNike = await orderApi.countRevenue({ dateRange, type: "brand", value: "NIKE" })
            const resultBrandJordan = await orderApi.countRevenue({ dateRange, type: "brand", value: "JORDAN" })
            dataDonutBrand[0] = resultBrandAdidas.reduce((acc, item) => acc + item.totalBill, 0)
            dataDonutBrand[1] = resultBrandNike.reduce((acc, item) => acc + item.totalBill, 0)
            dataDonutBrand[2] = resultBrandJordan.reduce((acc, item) => acc + item.totalBill, 0)
            const labels = dateRangeGenerate(startDate, endDate).map(e => {
                return moment(e).format("YYYY-MM-DD")
            })
            const datasets = [{
                label: "Tất cả",
                data: labels.map((date) => {
                    const revenue = resultAll.find(e => e.date === date)
                    if (revenue) return revenue.totalBill
                    return 0
                }
                ),
                borderColor: faker.color.rgb(),
                backgroundColor: faker.color.rgb(),
                lineTension: 0.3
            },
            {
                label: "ADIDAS",
                data: labels.map((date) => {
                    const revenue = resultBrandAdidas.find(e => e.date === date)
                    if (revenue) return revenue.totalBill
                    return 0
                }
                ),
                backgroundColor: color.typeOne.border,
                borderColor: color.typeOne.background,
                lineTension: 0.3
            },
            {
                label: "NIKE",
                data: labels.map((date) => {
                    const revenue = resultBrandNike.find(e => e.date === date)
                    if (revenue) return revenue.totalBill
                    return 0
                }
                ),
                 backgroundColor: color.typeTwo.border,
                 borderColor: color.typeTwo.background,
                lineTension: 0.3

            },
            {
                label: "JORDAN",
                data: labels.map((date) => {
                    const revenue = resultBrandJordan.find(e => e.date === date)
                    if (revenue) return revenue.totalBill
                    return 0
                }
                ),
                 backgroundColor: color.typeThree.border,
                 borderColor: color.typeThree.background,
                lineTension: 0.3

            },

            ];
            return { labels, datasets };
        } catch (error) { }
    }
};


export const getCountRevenueByType = async (startDate, endDate) => {
    {
        try {
            const dateRange = startDate + "--" + endDate
            const resultAll = await orderApi.countRevenue({ dateRange })
            const resultTypeGiay = await orderApi.countRevenue({ dateRange, type: "productType", value: "GIAY" })
            const resultTypeDep = await orderApi.countRevenue({ dateRange, type: "productType", value: "DEP" })
            const resultTypePhukien = await orderApi.countRevenue({ dateRange, type: "productType", value: "PHUKIEN" })
            dataDonutType[0] = resultTypeGiay.reduce((acc, item) => acc + item.totalBill, 0)
            dataDonutType[1] = resultTypeDep.reduce((acc, item) => acc + item.totalBill, 0)
            dataDonutType[2] = resultTypePhukien.reduce((acc, item) => acc + item.totalBill, 0)
            const labels = dateRangeGenerate(startDate, endDate).map(e => {
                return moment(e).format("YYYY-MM-DD")
            })
            const datasets = [{
                label: "Tất cả",
                data: labels.map((date) => {
                    const revenue = resultAll.find(e => e.date === date)
                    if (revenue) return revenue.totalBill
                    return 0
                }
                ),
                 backgroundColor: faker.color.rgb(),
                 borderColor: faker.color.rgb(),
                lineTension: 0.3
            },
            {
                label: "Giày",
                data: labels.map((date) => {
                    const revenue = resultTypeGiay.find(e => e.date === date)
                    if (revenue) return revenue.totalBill
                    return 0
                }
                ),
                 backgroundColor: color.typeOne.border,
                 borderColor: color.typeOne.background,
                lineTension: 0.3
            },
            {
                label: "Dép",
                data: labels.map((date) => {
                    const revenue = resultTypeDep.find(e => e.date === date)
                    if (revenue) return revenue.totalBill
                    return 0
                }
                ),
                 backgroundColor: color.typeTwo.border,
                 borderColor: color.typeTwo.background,
                lineTension: 0.3

            },
            {
                label: "Phụ kiện",
                data: labels.map((date) => {
                    const revenue = resultTypePhukien.find(e => e.date === date)
                    if (revenue) return revenue.totalBill
                    return 0
                }
                ),
                 backgroundColor: color.typeThree.border,
                 borderColor: color.typeThree.background,
                lineTension: 0.3

            },

            ];
            return { labels, datasets };
        } catch (error) { }
    }
};
export const getCountRevenueDonutBrand = () => {
    {
        try {

            const labels = ["ADIDAS", "NIKE", "JORDAN"]
            const dataCount = dataDonutBrand
            const datasets = [
                {
                    label: '# of Votes',
                    data: dataCount,
                    backgroundColor: Object.values(color).map(e=>e.background),
                    borderColor:Object.values(color).map(e=>e.border),
                    borderWidth: 1,
                }
            ]
            return { labels, datasets }
        } catch (error) {

        }

    }
}
export const getCountRevenueDonutType = () => {
    {
        try {

            const labels = ["GIAY", "DEP", "PHUKIEN"]
            const dataCount = dataDonutType
            const datasets = [
                {
                    label: '# of Votes',
                    data: dataCount,
                    backgroundColor: Object.values(color).map(e=>e.background),
                    borderColor:Object.values(color).map(e=>e.border),
                    borderWidth: 1,
                }
            ]
            return { labels, datasets }
        } catch (error) {

        }

    }
}