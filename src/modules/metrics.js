export const companiesMetrics = {
    metricsFunc: [
        (index, paginatedData) => {
            let max = 0
            for (const itemData of paginatedData) {
                max =
                    +itemData['products'][index]['count'] > max
                        ? +itemData['products'][index]['count']
                        : max
            }
            return max
        },
        (index, paginatedData) => {
            return (
                paginatedData.reduce(
                    (acc, curr) => acc + curr['products'][index]['count'],
                    0
                ) / paginatedData.length
            ).toFixed(2)
        },
        (index, paginatedData) => {
            let countSell = []
            paginatedData.forEach((el) => {
                countSell.push(el['products'][index]['count'])
            })
            countSell = countSell.sort((a, b) => a - b)
            if (countSell.length % 2 === 1) {
                return countSell[Math.floor(countSell.length / 2)]
            } else {
                return (
                    (countSell[countSell.length / 2 - 1] +
                        countSell[countSell.length / 2]) /
                    2
                )
            }
        },
    ],
    computeAllMoney: (paginatedData) => {
        return paginatedData
            .reduce((acc, curr) => acc + +curr['totalMoney'], 0)
            .toFixed(2)
    },
}
