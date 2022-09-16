import React from 'react';
import './process.css';
// import { IoCaretForwardCircleOutline } from "react-icons/io5";
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
         <Popups trigger={popup} setTrigger={setPopup}/>
        </div>
       </div>
    </section>
  )
}

{/* <div className='process_content'>
         <h3>Step 2</h3>
         <article className='process_details'>
             <IoCaretForwardCircleOutline className='process_details-icon'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <article className='process_details'>
             <IoCaretForwardCircleOutline className='process_details-icon'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <article className='process_details'>
             <IoCaretForwardCircleOutline className='process_details-icon'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
        </div> */}

export default Process