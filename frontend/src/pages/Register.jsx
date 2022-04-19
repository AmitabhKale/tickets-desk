import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import {toast} from 'react-toastify';
import {useSelector, useDispatch } from 'react-redux';
import { register } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const {user, isLoading, isSuccess, message } = useSelector(state => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2){
      toast.error('Password do not match')
    }else{
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData));
    }
  }

  return (
    <>
      <section className="heading">
        <h1>
          {" "}
          <FaUser /> Register 
        </h1>
        <p>Please create an account</p>
        </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="name"
              className="form-control"
              name='name'
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name here"
              required
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              name='password2'
              id="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm password"
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

export default Register;
