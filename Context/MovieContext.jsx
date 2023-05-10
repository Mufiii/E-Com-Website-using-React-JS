import React, {useState,createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = props => {

  const [movies,setMovies] = useState([
    {
       name: 'Harry potter',
       price: '$10',
       id : 2566124
    },
    {
       name: 'Game of Thrones',
       price: '$10',
       id : 23124
    },
    {
       name: 'Incesption',
       price: '$10',
       id : 23524
    }
  ]);

  return (
    <MovieContext.Provider value={"Helooooo"}>
       {props.children}
    </MovieContext.Provider>
  )
}

