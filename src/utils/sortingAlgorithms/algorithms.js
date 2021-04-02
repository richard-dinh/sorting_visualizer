const mergeSort = require('./mergeSort')
const bubbleSort = require('./bubbleSort')

const algorithms = {
    BubbleSort: arr => {
        return bubbleSort(arr)
    },

    MergeSort: (arr, start = 0, end = arr.length) => {
        return mergeSort(arr, start, end)
    },
}



module.exports = algorithms