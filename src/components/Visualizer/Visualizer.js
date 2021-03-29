import React, {useState, useEffect} from 'react'
import "./Visualizer.css";
const Visualizer = () => {

    const [array, setArray] = useState([])


    useEffect( () => {
        //TODO: allow for adjusing of array length
        let arr = []
        // populate array with random numbers between 10 - 1000
        // allow for duplicate numbers as sorting algorithms should be able to handle duplicate numbers
        for(let i = 0; i < 50; i++){
            arr.push(generateRandomNumber(10, 100))
        }
        setArray(arr)
    }, [])

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }


    return(
        <div className = 'array_container'>
            {array.map((value, index) => {
                return(
                    <div key = {index} className = 'array_column' style = {{height: `${value}px`}}>
                    </div>
                )
            })}
        </div>
    )
}

export default Visualizer