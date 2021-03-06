const {QuickSort} = require("../sortingAlgorithms/algorithms");

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateNewArray = () => {
    let arr = [];
    for (let i = 0; i < 150; i++) {
        arr.push(generateRandomNumber(10, 200));
    }

    return arr;
};

test("QuickSort sorting test with random array", () => {
    let arr = generateNewArray();
    let sortedArr = arr.sort((a, b) => a - b);
    let { array: quickSortArr } = QuickSort(arr);
    expect(quickSortArr).toStrictEqual(sortedArr);
});

test("QuickSort sorting test with empty array", () => {
    let arr = [];
    let { array: quickSortArr } = QuickSort(arr);
    expect(quickSortArr).toStrictEqual(arr);
});

test("QuickSort sorting test with array with duplicate values", () => {
    let arr = [1, 3, 4, 6, 4, 2, 3, 9, 8, 5, 2, 3, 6, 5];
    let sortedArr = arr.sort((a, b) => a - b);
    let { array: quickSortArr } = QuickSort(arr);
    expect(quickSortArr).toStrictEqual(sortedArr);
});
