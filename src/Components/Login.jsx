import React from 'react';
import loginImg from '../assets/login.png';
import Template from './Template';

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back to Food Rescue"
      desc1="Join us in our mission to reduce food waste and fight hunger."
      desc2="Log in to access your dashboard and manage your contributions."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
