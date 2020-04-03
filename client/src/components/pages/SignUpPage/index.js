import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../forms/SignUpForm';

const SignUpPage = (props) => {

  return (
    <>
      <Link to={ '/login' }>Login</Link>
      <SignUpForm/>
    </>
  );
};

export default SignUpPage;
