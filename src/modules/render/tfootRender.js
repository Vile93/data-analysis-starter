import { tfoot } from '../domVariables.js'
import { headerTitles, footers } from '../constants.js'
import { companiesMetrics } from '../metrics.js'
export default function tfootRender(paginatedData) {
    footers.forEach((footer, i) => {
        const tr = document.createElement('tr')
        headerTitles.forEach((header, k) => {
            const td = document.createElement('td')
            if (k === 0) {
                td.textContent = footer
                tr.append(td)
                return
            }
            if (Array.isArray(header)) {
                header.forEach((el, index) => {
                    const [td1, td2] = createFooterTableCells(i, index)
                    tr.append(td1, td2)
                })
            } else {
                td.textContent =
                    k !== headerTitles.length - 1 || i !== footers.length - 1
                        ? '-'
                        : companiesMetrics['computeAllMoney'](paginatedData)
                tr.append(td)
            }
        })
        tr.classList.add('metric')
        tfoot.append(tr)
    })

    function createFooterTableCells(i, index) {
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        if (footers[i] !== 'Сумма всех продаж') {
            td1.textContent =
                paginatedData.length === 0
                    ? '0'
                    : companiesMetrics['metricsFunc'][i](index, paginatedData)
        } else {
            td1.textContent = '-'
        }
        td2.textContent = '-'
        return [td1, td2]
    }
}
