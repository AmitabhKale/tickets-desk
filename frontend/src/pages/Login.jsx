import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import {toast} from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault()

    if(!password){
      toast.error('Password do not match')
    }
  }

  return (
    <>
      <section className="heading">
        <h1>
          {" "}
          <FaUser /> Login
        </h1>
        <p>Please create an account</p>
        </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name='email'
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email here"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name='password'
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-block">
              Submit
            </button>
          </div>
          
        </form>
      </section>
    </>
  );
};

export default Login;
