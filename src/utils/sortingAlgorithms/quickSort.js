const quickSort = (arr, start, end, animations = []) => {
    //partition will choose a random pivot point and move all elements that are smaller to the left and all elements that are bigger to the right of the pivot.
    //partition will need to return the index of where the pivot is placed in order for us to quick sort the elements to the left and elements to the right of the pivotIndex as well
    //get the partitionIndex (partition finds and places one value in the arr at the correct spot)

    // run only when start is less than end
    if(start < end){

        let partitionIndex = partition(arr, start, end, animations)
        // skip paritionIndex because that value is already sorted
        let quickObjectLeft = quickSort(arr, start, partitionIndex - 1, animations)
        let quickObjectRight = quickSort(arr, partitionIndex + 1, end, animations)
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
    let animateSwap = {}
    animateSwap.swap = [pivot, end]
    animations.push(animateSwap)
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
            animateSwap.swap = [index, partitionIndex]
            animations.push(animateSwap)
            temp = arr[index]
            arr[index] = arr[partitionIndex]
            arr[partitionIndex] = temp;
            partitionIndex++;
        }
        index++
    }

    // swap element at partitionIndex with arr[end]
    animateSwap.swap = [partitionIndex, end]
    animations.push(animateSwap)
    temp = arr[partitionIndex]
    arr[partitionIndex] = arr[end]
    arr[end] = temp

    return partitionIndex;
    
}

const getRandomIndexWIthinRange = (min, max) => {
    // returns a number between min and max (both inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min
}


const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateNewArray = () => {
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(generateRandomNumber(10, 200));
  }

  return arr;
};
// let arr = generateNewArray()
// console.log(quickSort(arr, 0, arr.length-1))
module.exports = quickSort