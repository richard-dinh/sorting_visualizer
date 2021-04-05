const quickSort = (arr, start, end, animations = []) => {
    //partition will choose a random pivot point and move all elements that are smaller to the left and all elements that are bigger to the right of the pivot.
    //partition will need to return the index of where the pivot is placed in order for us to quick sort the elements to the left and elements to the right of the pivotIndex as well
    //get the partitionIndex (partition finds and places one value in the arr at the correct spot)

    // run only when start is less than end
    if(start < end){

        let partitionObject = partition(arr, start, end, animations)
        // skip paritionIndex because that value is already sorted
        let quickObjectLeft = quickSort(arr, start, partitionObject.partitionIndex - 1, partitionObject.animations)
        let quickObjectRight = quickSort(arr, partitionObject.partitionIndex + 1, end, partitionObject.animations)
    }

    return {array: arr, animations}
}

//partition will need to return the index of where the pivot is placed in order for us to quick sort the elements to the left and elements to the right of the pivotIndex as well

const partition = (arr, start, end, animations) => {

    let pivot = getRandomIndexWIthinRange(start, end)
    let partitionIndex = start
    let index = start
    // swap pivot value with value located at end
    // TODO: add to animations swap [pivot, end]
    let initialSwap = {}
    initialSwap.swap = [pivot, end]
    animations.push(initialSwap)
    let temp = arr[end]
    arr[end] = arr[pivot]
    arr[pivot] = temp
    // move all elements smaller than 
    while(index < end){
        let animateCompare = {}
        //add to animations compare[index, end]
        animateCompare.compare = [index, end]
        animations.push(animateCompare)
        if(arr[index] < arr[end]){
            // add to animations swap[index, partitionIndex]
            let animateSwap = {}
            animateSwap.swap = [index, partitionIndex]
            animations.push(animateSwap)
            temp = arr[index]
            arr[index] = arr[partitionIndex]
            arr[partitionIndex] = temp
            partitionIndex++
        }
        index++
    }

    // swap element at partitionIndex with arr[end]
    let finalSwap = {}
    finalSwap.swap = [partitionIndex, end]
    animations.push(finalSwap)
    temp = arr[partitionIndex]
    arr[partitionIndex] = arr[end]
    arr[end] = temp


    return {partitionIndex, animations}
    
}


module.exports = quickSort