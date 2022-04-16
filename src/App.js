import logo from './logo.svg';
import './App.css';
import Todos from "./Todos";
import {useState, memo} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Blogs} from "./pages/Blogs";
import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home";
import {contact} from "./pages/Contact";
import {NoPage} from "./pages/Nopage";

function App() {
   const [count, setCount]=useState(0);
  const [color, setColor]=useState("red");
  const [todos, settodos]= useState(["todo1","todo2"]);
  const[brand, setBrand]=useState('tata');
  const[model, setModel]=useState("brAND NEW");
  const[year, setYear]=useState(1967);
  
  const [car, setCar]=useState(
{
  brand: "bmw",
  model: "brands",
  year: 1788,
  color: "navy blue"
   } );

const increment=()=>{setCount((c)=>{return c+1});}
   const updateModel=()=>{
    setCar(previousState=>{return{...previousState, model:"swift"}});
  };

  const updateyear=()=>{
    setCar(previousState=>{return{ ...previousState, year:1993}});
  }

  
  return (
  <>
  
<BrowserRouter>
<Routes>
<Route path="/" element={<layout/>}>
<Route index element={<home/>}/> 
<Route path="blogs" element={<layout/>}/>
<Route path="contact" element={<contact/>}/>
<Route path="*" element={<nopage/>}/> 
</Route>
</Routes>
</BrowserRouter>



  <Todos todos={todos} />
  <h1>i am<br />{color}am<br />{year}am<br />{brand}am<br />{model}<br /></h1>

<h2>am{car.brand}ami am<br />{car.color}am<br />{car.year}am<br />{car.brand}am<br />{car.model}</h2>

<button onClick={updateyear} >okkk</button>
<button onClick={updateyear} >okkk</button>
<button onClick={updateModel} >okkk</button>

<hr />
<div>
  Count: {count}
  <button onClick={increment}>+</button>
  </div>  
  
  </>
    
  );
}

export default memo(App);
