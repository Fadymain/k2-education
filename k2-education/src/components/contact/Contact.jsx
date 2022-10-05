import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className='contact'>
        <h1>Contact Us</h1>
        <form>
            <label for='name'>Name</label>
            <input type='text' id='name' />

            <label for='email'>Email</label>
            <input type='email' id='email' />

            <label for='number'>Number</label>
            <input type='tel' id='number' />
        </form>
    </section>
  )
}

export default Contact