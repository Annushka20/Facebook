import { useState } from 'react';
import './App.css';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const App = () => {
  const [showMain2, setShowMain2] = useState(false);

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPass, setRegisterPass] = useState('');

  const [loginErr, setLoginErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const [showPass, setShowPass] = useState(false);

  const [users, setUsers] = useState([]);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const sendForm = (e) => {
    e.preventDefault();
    let valid = true;

    if (!login.trim()) {
      setLoginErr('Login is required!');
      valid = false;
    } else {
      setLoginErr('');
    }

    if (!pass.trim()) {
      setPassErr('Password is required!');
      valid = false;
    } else {
      setPassErr('');
    }

    if (valid) {
      alert("Logged in!");
    }
  };

  const validateRegistration = () => {
    let valid = true;

    const nameRegex = /^[A-Z][a-zA-Z]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(registerName)) {
      setNameErr('Name must start with a capital letter!');
      valid = false;
    } else {
      setNameErr('');
    }

    if (!emailRegex.test(registerEmail)) {
      setEmailErr('Invalid email!');
      valid = false;
    } else if (users.some(user => user.email === registerEmail.toLowerCase())) {
      setEmailErr('Email already exists!');
      valid = false;
    } else {
      setEmailErr('');
    }

    if (!registerPass.trim()) {
      setPassErr('Password is required!');
      valid = false;
    } else {
      setPassErr('');
    }

    if (valid) {
      const newUser = {
        name: registerName,
        email: registerEmail.toLowerCase(),
        pass: registerPass
      };

      setUsers(prev => [...prev, newUser]);

      setRegisterName('');
      setRegisterEmail('');
      setRegisterPass('');
      alert('Registered successfully!');
    }
  };

  return (
    <div className='holder'>
      <div className='text-part1'>
        <h1 className='facebook'>facebook</h1>
        <h2 className='facebook-2'>
          Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.
        </h2>
      </div>

      <div className='form-area'>
        <form onSubmit={sendForm} className='form-box'>
          <input
            type='text'
            placeholder='Email or phone number'
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
              setLoginErr('');
            }}
          />
          {loginErr && <p className='error'>{loginErr}</p>}

          <div className='password-box'>
            <input
              type={showPass ? 'text' : 'password'}
              placeholder='Passcode'
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
                setPassErr('');
              }}
            />
            {showPass ? (
              <IoEyeSharp className='eye-icon' onClick={togglePassword} />
            ) : (
              <FaEyeSlash className='eye-icon' onClick={togglePassword} />
            )}
          </div>
          {passErr && <p className='error'>{passErr}</p>}

          <button className='enter' type='submit'>Enter</button>
          <button type='button' className='create-new-acc' onClick={() => setShowMain2(true)}>
            Create new account
          </button>
        </form>

        {showMain2 && (
          <div className='form-box register-box'>
            <input
              type='text'
              placeholder='Enter your name'
              value={registerName}
              onChange={(e) => {
                setRegisterName(e.target.value);
                setNameErr('');
              }}
            />
            {nameErr && <p className='error'>{nameErr}</p>}

            <input
              type='password'
              placeholder='Enter your passcode'
              value={registerPass}
              onChange={(e) => {
                setRegisterPass(e.target.value);
                setPassErr('');
              }}
            />
            {passErr && <p className='error'>{passErr}</p>}

            <input
              type='email'
              placeholder='Enter your email'
              value={registerEmail}
              onChange={(e) => {
                setRegisterEmail(e.target.value);
                setEmailErr('');
              }}
            />
            {emailErr && <p className='error'>{emailErr}</p>}

            <button className='enter' onClick={validateRegistration}>Register</button>
          </div>
        )}
      </div>

      <div className='user-list'>
        <h3>Registered Users:</h3>
        {users.length === 0 ? (
          <p>No users registered</p>
        ) : (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <strong>{user.name}</strong>  {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
