import React, {useState, useEffect} from 'react'

const Visualizer = () => {

    const [array, setArray] = useState([])


    useEffect( () => {
        console.log('Populate array with random numbers')
    }, [])
    return(
        <p>
            Array goes here
        </p>
    )
}

export default Visualizer