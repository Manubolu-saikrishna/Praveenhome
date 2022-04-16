import React from 'react';
import {useState} from 'react'

function NewContactss1(){
    const [name, setName]=useState("sai");
    return (
        <div>
            <h1>
{`name${name}`}
        </h1>
        <div><NewContactss2 user={user}/></div>
        </div>
    )
}
function NewContactss2(user){
    return <>
    <NewContactss3 user={user}/>
    </>
}

function NewContactss3(user){
    return <>
    <NewContactss4 user={user}/>
    </>
}
function NewContactss4(user){
    return <>
    <NewContactss5 user={user}/>
    </>
}

function NewContactss5(user){
    return <>
    <div>hello world</div>
    </>
}

export default NewContactss1