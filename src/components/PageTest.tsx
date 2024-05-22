import React from 'react'
import Button from './Button'
import Title from './Title'
import { useState } from 'react'

function PageTest() {
     
     const [num, setNum] = useState<number>(0);

     function addNumber(): void {
       setNum(num + 1);
   
     }
   
     function subNumber(): void {
       num > 0 ? setNum(num - 1) : alert("Cannot be negative")
     }
   
     function handleClick2(): void {
       const date = new Date();
       const currentDate = date.toDateString();
       alert(`Void function and vale at: ${currentDate}`)
       alert(`The type of num is: ${stringfyNum()}`)
     }
   
     function stringfyNum(): string {
       return (typeof num)
     }
  return (
     <>
     <div className='app-container__top'>
     <Title title="Hello World" gender="male" age={num} />
   </div>



   <div className='app-container__middle'>
     <Button style="success" onClick={addNumber}>+1</Button>
     <Button style="danger" onClick={subNumber}>-1</Button>
   </div>

   <div className='app-container__bottom'>
     <Button onClick={handleClick2}>Alert Message</Button>
   </div>
   </>
  )
}

export default PageTest