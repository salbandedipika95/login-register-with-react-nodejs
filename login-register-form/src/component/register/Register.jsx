import React from 'react'
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import './register.css'

const Register = () => {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    //  console.log(e.target.value,e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  
  return (
    <div className="container">
      <h2 className='regi'>Register</h2>
      <Form onSubmit={handleSubmit} className="custom-form">
        <Form.Group controlId="username">
          <Form.Control type="text" name="username" placeholder="username" onChange={handleForm} required />
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Control type="date" name="dob" placeholder=" Date of Birth" onChange={handleForm} required />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Control type="email" name="email" placeholder="email address" onChange={handleForm} required />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control type="password" name="password" placeholder="password" onChange={handleForm} required />
        </Form.Group>
        <Button className="btn" type="submit" >Submit</Button>
        <a href="login">Already have an account? Login</a>
      </Form>
      
    </div>
  )
}

export default Register