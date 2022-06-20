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
const color = {
    typeOne: {
        border: faker.color.rgb(),
        background: faker.color.rgb()
    },
    typeTwo: {
        border: faker.color.rgb(),
        background: faker.color.rgb()
    },
    typeThree: {
        border: faker.color.rgb(),
        background: faker.color.rgb()
    },
    typeForth: {
        border: faker.color.rgb(),
        background: faker.color.rgb()
    },
}
export const dataDonut = []
export const getCountOrderStatus = async (startDate, endDate) => {
    {
        try {
            const dateRange = startDate + "--" + endDate
            const result = await orderApi.countOrderStatus({ dateRange })
            
            dataDonut[0] = result.reduce((acc, item) => acc + item.status[0], 0)
            dataDonut[1] = result.reduce((acc, item) => acc + item.status[1], 0)
            dataDonut[2] = result.reduce((acc, item) => acc + item.status[2], 0)
            dataDonut[3] = result.reduce((acc, item) => acc + item.status[3], 0)
            const labels = dateRangeGenerate(startDate, endDate).map(e => {
                return moment(e).format("YYYY-MM-DD")
            })
            const datasets = [{
                label: "Tất cả",
                data: labels.map((date) => {
                    const itemExist = result.find(e => e.date === date)
                    if (itemExist) return itemExist.status.reduce((acc, item) => acc + item, 0)
                    return 0
                }
                ),
                borderColor: faker.color.rgb(),
                backgroundColor: faker.color.rgb(),
                lineTension: 0.3
            },
            {
                label: "PENDING",
                data: labels.map((date) => {
                    const itemExist = result.find(e => e.date === date)
                    if (itemExist) return itemExist.status[0]
                    return 0
                }
                ),
                backgroundColor: color.typeOne.border,
                borderColor: color.typeOne.background,
                lineTension: 0.3
            },
            {
                label: "ACCEPTED",
                data: labels.map((date) => {
                    const itemExist = result.find(e => e.date === date)
                    if (itemExist) return itemExist.status[1]
                    return 0
                }
                ),
                backgroundColor: color.typeTwo.border,
                borderColor: color.typeTwo.background,
                lineTension: 0.3

            },
            {
                label: "SUCCESS",
                data: labels.map((date) => {
                    const itemExist = result.find(e => e.date === date)
                    if (itemExist) return itemExist.status[2]
                    return 0
                }
                ),
                backgroundColor: color.typeThree.border,
                borderColor: color.typeThree.background,
                lineTension: 0.3

            },
            {
                label: "CANCEL",
                data: labels.map((date) => {
                    const itemExist = result.find(e => e.date === date)
                    if (itemExist) return itemExist.status[3]
                    return 0
                }
                ),
                backgroundColor: color.typeForth.border,
                borderColor: color.typeForth.background,
                lineTension: 0.3

            },
            ];
            return { labels, datasets };
        } catch (error) { }
    }
};



export const getCountOrderStatusDonut = () => {
    {
        try {

            const labels = ["PENDING","ACCEPTED", "SUCCESS", "CANCEL"]
            const dataCount = dataDonut
            const datasets = [
                {
                    label: '# of Votes',
                    data: dataCount,
                    backgroundColor: Object.values(color).map(e => e.background),
                    borderColor: Object.values(color).map(e => e.border),
                    borderWidth: 1,
                }
            ]
            return { labels, datasets }
        } catch (error) {

        }

    }
}