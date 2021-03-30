import React, {useState, useEffect} from 'react'
import "./Visualizer.css";
const Visualizer = () => {

    const [array, setArray] = useState([])


    useEffect( () => {
        //TODO: allow for adjusing of array length
        let arr = []
        // populate array with random numbers between 10 - 1000
        // allow for duplicate numbers as sorting algorithms should be able to handle duplicate numbers
        for(let i = 0; i < 150; i++){
            arr.push(generateRandomNumber(10, 200))
        }
        setArray(arr)
    }, [])

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const generateNewArray = () => {
        let arr = []
        for (let i = 0; i < 150; i++) {
            arr.push(generateRandomNumber(10, 200));
        }
        setArray(arr);
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
                <hr class="divider"></hr>
                <li>
                    <button onClick = {generateNewArray}>Generate New Array</button>
                </li>
                <hr class="divider"></hr>
                <li>
                    <button>Sort</button>
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