import React, { useState } from 'react'

function Counter() {

  const [counterOne,setCounterOne] = useState(0)
  const [counterTwo,setCounterTwo] = useState(0)

  const incrementOne = () => {
     setCounterOne(counterOne + 1)
  }
  const incrementTwo = () => {
     setCounterTwo(counterTwo + 1)
  }



  return (
    <div>
    <div>
      <button onClick={incrementOne} >count one - {counterOne}</button>
    </div>
    <div>
      <button onClick={incrementTwo} >count two - {counterTwo}</button>
    </div>
    </div>
  )
}

export default Counter