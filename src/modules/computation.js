import { data } from './data/fillData.js'

export const computeTotalMoney = () =>
    data.reduce((acc, curr) => acc + +curr['totalMoney'], 0)
export const computePercentOfCompany = (sum) => {
    data.forEach(
        (el) =>
            (el['percentOfCompany'] = ((el['totalMoney'] / sum) * 100).toFixed(
                2
            ))
    )
}
export const computeTotalMoneyPerCompany = (products) =>
    products
        .reduce((acc, curr) => acc + curr['price'] * curr['count'], 0)
        .toFixed(2)
export const computePrice = (count, pricePerItem) =>
    count !== 0 ? (count * pricePerItem).toFixed(2) : 0
