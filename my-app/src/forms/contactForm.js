import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles/ContactForm.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  title: yup.string().required('Title is required'),
  date: yup.date().required('Date is required').typeError('Invalid date'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const [savedName, setSavedName] = useLocalStorage('name', '');
  const [savedTitle, setSavedTitle] = useLocalStorage('title', '');
  const [savedDate, setSavedDate] = useLocalStorage('date', '');
  const [savedMessage, setSavedMessage] = useLocalStorage('message', '');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: savedName,
      title: savedTitle,
      date: savedDate,
      message: savedMessage,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setSavedName(data.name);
    setSavedTitle(data.title);
    setSavedDate(data.date);
    setSavedMessage(data.message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Your Full Name</label>
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label>Story Title</label>
        <input {...register('title')} />
        <p>{errors.title?.message}</p>
      </div>
      <div>
        <label>Date</label>
        <input type="date" {...register('date')} />
        <p>{errors.date?.message}</p>
      </div>
      <div>
        <label>Your Story</label>
        <textarea {...register('message')} />
        <p>{errors.message?.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
