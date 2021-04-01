const mergeSort = require('./mergeSort')

const algorithms = {
    BubbleSort: arr => {
        let animations = []
        for(let i = 0; i < arr.length - 1; i++){
            // need to go to length arr.length - 1 - i because we check 1 element ahead
            for(let j = 0; j < arr.length - 1 -i; j++){
                let compare = {}
                compare.compare = [j, j+1]
                animations.push(compare);
                if(arr[j] > arr[j + 1]){
                    let swap = {}
                    swap.swap = [j, j+1]
                    animations.push(swap)
                    arr = swapValues(arr, j, j+1)
                }
            }
        }
        // return the animations and arr
        return { arr, animations }
    },

    MergeSort: (arr, start = 0, end = arr.length) => {
        return mergeSort(arr, start, end)
    },
}


// given an array, swawp values at index1 and index2
const swapValues = (arr, index1, index2) => {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}



module.exports = algorithms