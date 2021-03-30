import React, {useState, useEffect} from 'react'
import "./Visualizer.css";
import algorithms from '../../utils/sortingAlgorithms/algorithms'
const Visualizer = () => {

    const [array, setArray] = useState([])


    useEffect( () => {
        generateNewArray()
    }, [])

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const generateNewArray = () => {
        //TODO: allow for adjusing of array length
        let arr = []
        // populate array with random numbers between 10 - 1000
        // allow for duplicate numbers as sorting algorithms should be able to handle duplicate numbers
        for (let i = 0; i < 150; i++) {
            arr.push(generateRandomNumber(10, 200));
        }
        setArray(arr);
    }

    const handleBubbleSort = () => {


        let {animations} = algorithms.BubbleSort(array)
        let visual_arr = document.getElementsByClassName("array_column")
        for(let i = 0; i < animations.length; i++){
            if(animations[i].compare){
                let [index1, index2] = animations[i].compare
                setTimeout(() => {
                    visual_arr[index1].style.backgroundColor = 'green'
                    visual_arr[index2].style.backgroundColor = 'green'
                }, (i*2))
                // set color back to blue
                setTimeout(() => {
                    visual_arr[index1].style.backgroundColor = 'blue'
                    visual_arr[index2].style.backgroundColor = 'blue'
                }, (i*2) + 2)
            }
            else{
                let [index1, index2] = animations[i].swap
                setTimeout(() => {
                    let tempHeight = visual_arr[index1].style.height
                    visual_arr[index1].style.height = visual_arr[index2].style.height
                    visual_arr[index2].style.height = tempHeight
                }, (i*2));
            }
        }
    }

    return(
        <div className = 'container'>
            <ul className = 'options'>
                <h3>Sorting Algorithms</h3>
                <li>
                    <button>Bubble Sort</button>
                </li>
                <li>
                    <button>Heap Sort</button>
                </li>
                <li>
                    <button>Quick Sort</button>
                </li>
                <hr className="divider"></hr>
                <li>
                    <button onClick = {generateNewArray}>Generate New Array</button>
                </li>
                <hr className="divider"></hr>
                <li className = 'sort'>
                    <button onClick = {handleBubbleSort}>Sort</button>
                </li>
            </ul>
            <div className = 'array_container'>
                {array.map((value, index) => {
                    return(
                        <div key = {index} className = 'array_column' style = {{height: `${value}px`}}>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Visualizer