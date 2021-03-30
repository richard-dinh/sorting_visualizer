
const algorithms = {
    BubbleSort: arr => {
        for(let i = 0; i < arr.length - 1; i++){
            // need to go to length arr.length - 1 - i because we check 1 element ahead
            for(let j = 0; j < arr.length - 1 -i; j++){
                if(arr[j] > arr[j + 1]){
                    arr = swapValues(arr, j, j+1)
                }
            }
        }
        return arr
    }
}


// given an array, swawp values at index1 and index2
const swapValues = (arr, index1, index2) => {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}


module.exports = algorithms