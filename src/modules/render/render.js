import { itemsPerPage, currentPage } from '../events.js'
import { filteredData } from '../data/fillData.js'
import resetRender from './resetRender.js'
import pageStatusRender from './pageStatusRender.js'
import theadRender from './theadRender.js'
import tbodyRender from './tbodyRender.js'
import tfootRender from './tfootRender.js'
export function render() {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    const paginatedData = filteredData.slice(start, end)
    resetRender()
    pageStatusRender()
    theadRender()
    tbodyRender(paginatedData)
    tfootRender(paginatedData)
}
