import { headerTitles } from '../constants.js'
import { thead } from '../domVariables.js'
export default function theadRender() {
    headerTitles.forEach((header) => {
        if (Array.isArray(header)) {
            header.forEach((el) => {
                const th1 = document.createElement('th')
                const th2 = document.createElement('th')
                th1.textContent = el + '(шт.)'
                th2.textContent = el + '(руб.)'
                thead.append(th1, th2)
            })
        } else {
            const th = document.createElement('th')
            th.textContent = header
            thead.append(th)
        }
    })
}
