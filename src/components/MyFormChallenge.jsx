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

    </div>
 </div>
    </>
  );
}

export default MyForm;