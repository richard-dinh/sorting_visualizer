// const mergeSort = (arr) => {
//     let animations = [];
//     if (arr.length < 2) return {array: arr, animation: animations};
//     // keep splitting array in half
//     let midpoint = Math.floor(arr.length / 2);
//     let left = arr.slice(0, midpoint);
//     let right = arr.slice(midpoint, arr.length);

//     let {array: leftArr} = mergeSort(left);
//     let {array: rightArr} = mergeSort(right);

//     let {array, animation} = mergeArr(left, right, animations);

//     return {array, animation};
// }


// const mergeArr = (left, right, animations) => {
//     let arr = []
//     while (left.length > 0 && right.length > 0) {
//         // a comparison here
//         if (right[0] < left[0]) {
            
//             arr.push(right.shift());
//         } 
//         else {
//             arr.push(left.shift());
//         }
//     }

//     if (left.length > 0) {
//         arr = arr.concat(left);
//     }

//     if (right.length > 0) {
//         arr = arr.concat(right);
//     }

//     return {array: arr, animation: animations}
// };

const mergeSort = (arr, start, end, animations = []) => {


    if((end - start) < 1) return {array: arr, start, end, animations}
    let midpoint = Math.floor((end - start)/2)
    // need to add start to midpoint in order to get numbers in between start and end
    let left = mergeSort(arr, start, midpoint+start, animations)
    let right = mergeSort(arr, midpoint + 1+ start, end, animations)
    let mergeObject = mergeArr(arr, left, right, animations);
    return mergeObject
}



const mergeArr = (arr, left, right, animations) => {

    
    let leftArr = arr.slice(left.start, left.end+1)
    let rightArr = arr.slice(right.start, right.end+1)
    let leftStart = left.start
    let rightStart = right.start
    // index to track where in array to insert
    let index = left.start
    // each value corresponds to the index in the arr
    while(leftArr.length > 0 && rightArr.length > 0){
        // add compare animation for arr[left.start] and arr[right.start]
        let toAnimate = {}
        let animateReplace = {}
        toAnimate.compare = [leftStart, rightStart]
        animations.push(toAnimate)
        // value in right arr is less than value in left
        if(rightArr[0] < leftArr[0]){
            let value = rightArr.shift()
            //add swap animation for arr[index] with value
            animateReplace.replace = [index, value]
            arr[index] = value
            index++
            rightStart++
        }
        // value in left arr is less than value in right
        else{
            let value = leftArr.shift()
            //add swap animation for arr[index] with value
            animateReplace.replace = [index, value];
            arr[index] = value
            index++
            leftStart++
        }
        animations.push(animateReplace)
    }

    if(leftArr.length > 0){
        let animateReplace = {}
        while(leftArr.length){
            let value = leftArr.shift()
            //add swap animation for arr[index] with value
            animateReplace.replace = [index, value]
            animations.push(animateReplace);
            arr[index] = value
            index++
        }
    }
    if(right.length > 0){
        let animateReplace = {}
        while(rightArr.length){
            let value = rightArr.shift()
            //add swap animation for arr[index] with value
            animateReplace.replace = [index, value]
            animations.push(animateReplace)
            arr[index] = value
            index++
        }
    }
    return { array: arr, start: left.start, end: right.end, animations };
}


// let arr = [3,2,4,1,5]
// console.log(mergeSort(arr, 0, arr.length-1))
module.exports = mergeSort