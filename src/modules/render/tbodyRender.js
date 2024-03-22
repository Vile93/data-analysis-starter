import { tbody } from '../domVariables.js'
import { computePrice } from '../computation.js'
export default function tbodyRender(paginatedData) {
    for (const dataItem of paginatedData) {
        const tr = document.createElement('tr')
        for (const key in dataItem) {
            const td = document.createElement('td')
            if (key === 'products') {
                dataItem[key].forEach((productItem) => {
                    const [td1, td2] = createProductTableCells(productItem)
                    tr.append(td1, td2)
                })
            } else {
                td.textContent = dataItem[key]
                tr.append(td)
            }
        }
        tbody.append(tr)
    }

    function createProductTableCells(productItem) {
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        td1.textContent = productItem['count']
        td2.textContent = productItem['count']
            ? computePrice(productItem['count'], productItem['price'])
            : 0
        return [td1, td2]
    }
}
