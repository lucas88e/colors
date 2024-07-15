import { useState, useEffect, useRef } from 'react';
import BoxColor from './BoxColor';

function MyForm() {
const [value,setValue] = useState("")

const inputRef = useRef(null)
useEffect(()=>{
  inputRef.current.focus();
},[])


const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  return (
    <>
    <div className='bigBox'>
    <input id='name' type='text' placeholder=' añade el color' className='input' value={value} ref={inputRef} onChange={()=>setValue(inputRef.current.value)}/>
    <div className='container'>

    {colors.map((color)=>(
      <BoxColor key={color} value={value} color={color}/>
    ))}
{/*     
    <BoxColor value={value} color="green" />
    <BoxColor value={value} color="pink"/>
    <BoxColor value={value} color="yellow"/>
    <BoxColor value={value} color="purple"/>
    <BoxColor value={value} color="white"/>
    <BoxColor value={value} color="blue"/>
    <BoxColor value={value} color="aqua"/>
    <BoxColor value={value} color="olive"/> */}
    </div>
 </div>
    </>
  );
}

export default MyForm;