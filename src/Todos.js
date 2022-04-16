
import {useState, memo} from "react";
const Todos=({todos})=>{
console.log("child reder");
return(
    <>
    <h2>todos </h2>
    {
todos.map((todo, index) =>
{
return <p key={index}>{todo}</p>;
}
)
    }   
    </>
);
}
export default memo(Todos);