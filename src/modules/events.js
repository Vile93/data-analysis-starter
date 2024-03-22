import { filteredData, changeFilteredData } from './data/fillData.js'
import { render } from './render/render.js'
export let itemsPerPage = 10
export let currentPage = 1
export const events = () => {
    document.querySelector('.next-page').addEventListener('click', () => {
        if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
            currentPage++
            render(currentPage)
        }
    })
    document.querySelector('.prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--
            render(currentPage)
        }
    })
    document
        .querySelector('.input-filter-companies')
        .addEventListener('change', (e) => {
            changeFilteredData(e)
            currentPage = 1
            render(currentPage)
        })
    document.getElementById('countOfPage').addEventListener('input', (e) => {
        itemsPerPage = +e.target.value
        currentPage = 1
        render(currentPage)
    })
}
