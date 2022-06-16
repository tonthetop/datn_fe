import { faker } from "@faker-js/faker"
import { productApi } from "../api"

export const getCountProductType = async () => {
    {
        try {
            const params = {
                type: "productType"
            }
            const result = await productApi.countProduct(params) || []
            const labels = result.map(item => item._id)
            const dataCount = result.map(item => item.count)
            const datasets = [
                {
                    label: '# of Votes',
                    data: dataCount,
                    backgroundColor: dataCount.map(e => faker.color.rgb()),
                    borderColor: dataCount.map(e => faker.color.rgb()),
                    borderWidth: 1,
                }
            ]
            return { labels, datasets }
        } catch (error) {

        }

    }
}
export const getCountProductBrand = async () => {
    {
        try {
            const params = {
                type: "brand"
            }
            const result = await productApi.countProduct(params) || []
            const labels = result.map(item => item._id)
            const dataCount = result.map(item => item.count)
            const datasets = [
                {
                    label: '# of Votes',
                    data: dataCount,
                    backgroundColor: dataCount.map(e => faker.color.rgb()),
                    borderColor: dataCount.map(e => faker.color.rgb()),
                    borderWidth: 1,
                }
            ]
            return { labels, datasets }
        } catch (error) {

        }

    }
}