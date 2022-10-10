import React from 'react';
import useForm from 'react-hook-form';
import './contact.css';

const Contact = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log('data:', data)
  }

  return (
    <section className='contact'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' ref={register}/>

            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' ref={register}/>

            <label htmlFor='number'>Number:</label>
            <input type='tel' id='number' ref={register}/>

            <label htmlFor='info'>Additional Info:</label>
            <input type="text" id='info' ref={register}/>

          <button>Submit</button>
        </form>
    </section>
  )
}

export default Contact