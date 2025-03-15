import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Validation from './Validation/validation';

import './App.css';

const App = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className='holder'>
      <div className='text-part1'>
        <h1 className='facebook'>facebook</h1>
        <h2 className='facebook-2'>
          Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.
        </h2>
      </div>

      <Formik
        initialValues={{
          login: '',
          email: '',
          password: '',
        }}
        validationSchema={Validation}
        onSubmit={(values) => {
          alert('Form submitted!');
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit} className='form-box'>
            <input
              type='text'
              name='login'
              placeholder='Login'
              value={values.login}
              onChange={handleChange}
            />
            {errors.login && touched.login && <p className='error'>{errors.login}</p>}

            <input
              type='email'
              name='email'
              placeholder='Email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && <p className='error'>{errors.email}</p>}

            <div className='password-box'>
              <input
                type={showPass ? 'text' : 'password'}
                name='password'
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
              />
              {showPass ? (
                <IoEyeSharp className='eye-icon' onClick={togglePassword} />
              ) : (
                <FaEyeSlash className='eye-icon' onClick={togglePassword} />
              )}
            </div>
            {errors.password && touched.password && <p className='error'>{errors.password}</p>}

            <button className='enter' type='submit'>Enter</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
