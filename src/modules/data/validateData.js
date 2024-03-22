import { records } from './dataVariables.js'
export let modifiedRecords = structuredClone(records)

export function validateData() {
    modifiedRecords = modifiedRecords.filter(
        (el) =>
            el['company'] &&
            el['product'] &&
            Number.isInteger(el['count']) &&
            el['count'] > 0
    )
}
