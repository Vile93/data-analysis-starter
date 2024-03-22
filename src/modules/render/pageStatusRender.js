import { filteredData } from '../data/fillData.js'
import { currentPage, itemsPerPage } from '../events.js'

export default function pageStatusRender() {
    document.querySelector(
        '.current-page'
    ).textContent = `Страница: ${currentPage} из ${
        Math.ceil(filteredData.length / itemsPerPage) || 1
    }`
}
