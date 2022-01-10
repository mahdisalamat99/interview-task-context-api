import React, { useState,useEffect,createContext } from 'react';
import Loading from './components/Loading';
import { useParams } from "react-router-dom"


export const DataContext = createContext();

export const DataProvider = (props) => {

  let {searchParam} = useParams();




  const data = useState();
  
    useEffect(()=>{
      fetch('/api.json').then(r=>(
        r.json()
        
      )).then(r=>{
        // console.log(r)
        console.log(r)
        data[1](r)
      })
    }, []);

    if(!data[0]) {
      return (
        <Loading/>
      )
    }
    return (
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}