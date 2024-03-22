import { thead, tbody, tfoot } from '../domVariables.js'

export default function resetRender() {
    thead.innerHTML = ''
    tbody.innerHTML = ''
    tfoot.innerHTML = ''
}
