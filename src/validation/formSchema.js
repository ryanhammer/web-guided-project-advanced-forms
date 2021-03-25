// Here goes the schema for the form
import * as yup from 'yup';

export default yup.object().shape({
  username: yup
    .string()
    .required('username is required')
    .min(3, 'username must be at least 3 characters long'),
  email: yup
    .string()
    .email('must be a valid email')
    .required('email is required'),
  role: yup
    .string()
    .oneOf(['tl', 'instructor', 'alumni', 'student'], 'role is required'),
  civil: yup
    .string()
    .oneOf(['married', 'single'], 'civil status is required'),
  hiking: yup.string(),
  reading: yup.string(),
  coding: yup.string(),
})
