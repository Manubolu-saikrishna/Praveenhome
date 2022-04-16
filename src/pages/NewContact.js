import React from 'react';
import {useState, useEffect} from 'react';
export default function NewContact() {  
  const [count, setCount]=useState(0);
  const [car, setCar]=useState({
name:"saikrishna",
color:"brown",
Occupation:"BTECH",
Language:"telugi",
age:28
  });
useEffect(() => {
    let timer=setTimeout(()=>{
      setCount(
          (count)=> count+1
      );
    // setCar(
    //     (previousState)=>{return {...previousState, name:"sai"}
    //     });
  }, 8000
  )
  return ()=>{clearTimeout(timer)},[]
},[count])


    return (
    <>
    <div>{count}giii{car.name}</div>
    {/* <button type="button" onClick={updateColor}>click</button> */}
  </>
  )
}
