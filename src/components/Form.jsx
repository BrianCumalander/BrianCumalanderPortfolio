import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Do something with the form data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name')} />
      <input type="email" {...register('email')} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;