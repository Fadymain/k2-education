import React from 'react';
import './appliPro.css';


const data = [
  {
    step: 'Step 1',
    title: 'Book a Free Consultation',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
  },
  {
    step: 'Step 2',
    title: 'Fill & Submit Your Application',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
  }
];

const AppliPro = () => {
  return (
    <section className='appli_pro'>
        <h1>Apllication Process</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy <br></br>
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
        </p>
    </section>
  )
}

export default AppliPro