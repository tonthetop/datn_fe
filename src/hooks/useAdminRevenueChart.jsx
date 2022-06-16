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
export const getCountRevenueByBrand = async (startDate, endDate) => {
    {
        try {
            const dateRange = startDate + "--" + endDate
            const resultAll = await orderApi.countRevenue({ dateRange })
            const resultBrandAdidas = await orderApi.countRevenue({ dateRange, type: "brand", value: "ADIDAS" })
            const resultBrandJordan = await orderApi.countRevenue({ dateRange, type: "brand", value: "JORDAN" })
            const resultBrandNike = await orderApi.countRevenue({ dateRange, type: "brand", value: "NIKE" })

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
                borderColor: faker.color.rgb(),
                backgroundColor: faker.color.rgb(),
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
                borderColor: faker.color.rgb(),
                backgroundColor: faker.color.rgb(),
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
                borderColor: faker.color.rgb(),
                backgroundColor: faker.color.rgb(),
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
                label: "Giày",
                data: labels.map((date) => {
                    const revenue = resultTypeGiay.find(e => e.date === date)
                    if (revenue) return revenue.totalBill
                    return 0
                }
                ),
                borderColor: faker.color.rgb(),
                backgroundColor: faker.color.rgb(),
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
                borderColor: faker.color.rgb(),
                backgroundColor: faker.color.rgb(),
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
                borderColor: faker.color.rgb(),
                backgroundColor: faker.color.rgb(),
                lineTension: 0.3

            },

            ];
            return { labels, datasets };
        } catch (error) { }
    }
};