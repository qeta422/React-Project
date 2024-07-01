import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles/ContactForm.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const [savedName, setSavedName] = useLocalStorage('name', '');
  const [savedEmail, setSavedEmail] = useLocalStorage('email', '');
  const [savedMessage, setSavedMessage] = useLocalStorage('message', '');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: savedName,
      email: savedEmail,
      message: savedMessage,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setSavedName(data.name);
    setSavedEmail(data.email);
    setSavedMessage(data.message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Message</label>
        <textarea {...register('message')} />
        <p>{errors.message?.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
