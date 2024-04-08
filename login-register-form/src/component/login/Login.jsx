import React from "react";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";

const Login = () => {
  // const [form, setForm] = useState({});
  // const [users, setUsers] = useState({});
  const [username, setUname] = useState('');
  const [password, setPass] = useState('');
  const[error,setError]=useState('');

  const handleUsername = (e) => {
    setUname(e.target.value);
  };
  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //use to stop to rediret to another page as react is SPA
    // const response = await fetch("http://localhost:8080/demo", {
    //   method: "GET",
    // });
    try{
    const response = await fetch("http://localhost:8080/demo", {
      username,
      password
    });
    alert('Login successful:',response.data);
  }catch(err){
    alert('login failed:', err.response.data);
    setError(err.response.data.message);
    
  }
  }

  return (
    <div className="container">
      <h2 className="log">Login</h2>
      <Form onSubmit={handleSubmit} className="custom-form">
        <Form.Group controlId="username">
          <Form.Control
            type="text"
            name="username"
            placeholder="username"
            onChange={handleUsername}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            onChange={handlePassword}
            required
          />
        </Form.Group>
        <Button className="btn" type="submit">
          Submit
        </Button>
        <a href="register">Don't have an account? Register</a>
      </Form>
      
      
    </div>
  );
};

export default Login;
