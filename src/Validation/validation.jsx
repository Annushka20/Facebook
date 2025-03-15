import * as Yup from 'yup';

const Validation = Yup.object().shape({
  login: Yup.string()
    .min(5, 'Login should be at least 5 characters')
    .max(10, 'Login should be at most 10 characters')
    .matches(/^[a-zA-Z0-9_]+$/, 'Login can only contain letters, numbers, and underscores')
    .required('Login is required!'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required!'),

  password: Yup.string()
    .min(6, 'Password should be at least 6 characters')
    .max(20, 'Password must not exceed 20 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*#?&]/, 'Password must contain at least one special character')
    .required('Password is required!')
});

export default Validation;
