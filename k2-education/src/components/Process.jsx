import React from 'react';
import './process.css';
import Popups from './Popups';
import { useState } from 'react';

const Process = () => {
    const [popup, setPopup] = useState(false);

  return (
    <section id='process'>
       <h1>Application Process</h1> 

       <div className='process_container'>
        <div onClick={() => setPopup(true)} className='process_content'>
         <h3>Step 1</h3>   
        </div>
        <div onClick={() => setPopup(true)} className='process_content'>
         <h3>Step 2</h3>   
        </div>
        <div onClick={() => setPopup(true)} className='process_content'>
         <h3>Step 3</h3>   
        </div>
        <div onClick={() => setPopup(true)} className='process_content'>
         <h3>Step 4</h3>   
        </div>
        <div onClick={() => setPopup(true)} className='process_content'>
         <h3>Step 5</h3>   
        </div>
        <div onClick={() => setPopup(true)} className='process_content'>
         <h3>Step 6</h3>   
        </div>
         <Popups trigger={popup} setTrigger={setPopup}/>
       </div>
    </section>
  )
}


export default Process