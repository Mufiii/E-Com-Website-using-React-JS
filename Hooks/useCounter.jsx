import {useState} from 'react'

function useCounter(initialcount = 0 , value) {
  
  const [count,setcount] = useState(initialcount)

  const increment = () => {
     setcount(prevCount => prevCount + value)
  }
  const decrement = () => {
     setcount(prevCount => prevCount - value)
  }
  const reset = () => {
     setcount(initialcount)
  }
     return[count,increment,decrement,reset]
}

export default useCounter