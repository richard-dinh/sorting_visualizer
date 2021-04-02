const mergeSort = require('./mergeSort')
const bubbleSort = require('./bubbleSort')
const quickSort = require('./quickSort')

const algorithms = {
    BubbleSort: (arr) => {
        return bubbleSort(arr)
    },

    MergeSort: (arr) => {
        return mergeSort(arr, 0, arr.length - 1)
    },
    QuickSort: (arr) => {
        return quickSort(arr, 0, arr.length - 1)
    }
}



module.exports = algorithms