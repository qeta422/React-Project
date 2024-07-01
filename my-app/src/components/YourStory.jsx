import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/animations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StoriesContext } from "../context/StoriesContext";
import "../styles/ContactForm.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  title: yup.string().required("Title is required"),
  date: yup.string().required("Date is required").typeError("Invalid date"),
  message: yup.string().required("Message is required"),
});

const YourStory = () => {
  const { addStory } = useContext(StoriesContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      title: "",
      date: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const newStory = {
      id: Date.now().toString(),
      name: data.name,
      title: data.title,
      uploadDate: data.date,
      body: data.message,
    };
    addStory(newStory);
    console.log(newStory);
    navigate("/");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="title">Create Story</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="labels">
          <label>Your Full Name</label>
          <input {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
        <div className="labels">
          <label>Story Title</label>
          <input {...register("title")} />
          <p>{errors.title?.message}</p>
        </div>
        <div className="labels">
          <label>Date</label>
          <input type="date" {...register("date")} />
          <p>{errors.date?.message}</p>
        </div>
        <div className="labels">
          <label>Your Story</label>
          <textarea {...register("message")} />
          <p>{errors.message?.message}</p>
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default YourStory;
