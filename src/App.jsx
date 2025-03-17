import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Validation from "./Validation/validation";

import "./App.css";

const App = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="holder">
      <div className="text-part1">
        <h1 className="facebook">facebook</h1>
        <h2 className="facebook-2">
          Facebook помогает вам всегда оставаться на связи и общаться со своими
          знакомыми.
        </h2>
      </div>

      <Formik
        initialValues={{
          login: "",
          email: "",
          password: "",
        }}
        validationSchema={Validation}
        onSubmit={(values) => {
          alert("Form submitted!");
          console.log(values);
        }}
      >
        {
          <Form>
            <Field placeholder="Login" name="login" />
            <ErrorMessage name="login" />

            <Field placeholder="Email" name="email" />
            <ErrorMessage name="email" />

            <div className="password-box">
              <Field
                placeholder="Password"
                name="password"
                type={showPass ? "text" : "password"}
              />

              
              <ErrorMessage name="password" />

              {showPass ? (
                <IoEyeSharp className="eye-icon" onClick={togglePassword} />
              ) : (
                <FaEyeSlash className="eye-icon" onClick={togglePassword} />
              )}
            </div>
            <ErrorMessage name="password" />
            <button className="enter" type="submit">
              Enter
            </button>
          </Form>
        }
      </Formik>
    </div>
  );
};

export default App;
