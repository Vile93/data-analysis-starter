import { modifiedRecords } from './validateData.js'
import { PRODUCT_PRICES } from '../../generate.js'
import {
    computeTotalMoney,
    computePercentOfCompany,
    computeTotalMoneyPerCompany,
} from '../computation.js'

export let data = []
export let filteredData = []
export function fillData() {
    for (const record of modifiedRecords) {
        if (!data.some((el) => record['company'] === el['company'])) {
            const dataItem = { products: [] }
            for (let i = 0; i < Object.keys(PRODUCT_PRICES).length; i++) {
                dataItem['products'].push({
                    productName: Object.keys(PRODUCT_PRICES)[i],
                    price: Object.values(PRODUCT_PRICES)[i],
                    count: 0,
                })
            }
            data.push({
                company: record['company'],
                products: dataItem['products'],
                percentOfCompany: 0,
                totalMoney: 0,
            })
        }
        const foundCompany = data.find(
            (el) => el['company'] === record['company']
        )
        const foundProduct = foundCompany['products'].find(
            (product) => product['productName'] === record['product']
        )
        foundProduct['count'] += record['count']
        foundCompany['totalMoney'] = computeTotalMoneyPerCompany(
            foundCompany['products']
        )
    }
    computePercentOfCompany(computeTotalMoney())
    filteredData = data
}

export const changeFilteredData = (e) => {
    filteredData = data.filter((el) =>
        el['company'].toLowerCase().includes(e.target.value.toLowerCase())
    )
}
