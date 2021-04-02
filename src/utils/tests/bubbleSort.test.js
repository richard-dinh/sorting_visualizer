const algorithms = require('../sortingAlgorithms/algorithms')

const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateNewArray = () => {
    let arr = [];
    for (let i = 0; i < 150; i++) {
        arr.push(generateRandomNumber(10, 200));
    }
    
    return arr

};

test('BubbleSort sorting test with random array', () => {
    let arr = generateNewArray()
    let sortedArr = arr.sort((a, b) => a-b)
    let { arr: bubbleSortedArr } = algorithms.BubbleSort(arr);
    expect(bubbleSortedArr).toStrictEqual(sortedArr);
})

test('BubbleSort sorting test with empty array', () => {
    let arr = []
    let { arr: bubbleSortedArr } = algorithms.BubbleSort(arr);
    expect(bubbleSortedArr).toStrictEqual(arr);
})

test('BubbleSort sorting test with array with duplicate values', () => {
    let arr = [1, 3, 4, 6, 4, 2, 3, 9, 8, 5, 2, 3, 6, 5]
    let sortedArr = arr.sort((a,b) => a-b)
    let { arr: bubbleSortedArr } = algorithms.BubbleSort(arr);
    expect(bubbleSortedArr).toStrictEqual(sortedArr);
})
