import React from 'react';
import signupImg from '../assets/signup.png';
import Template from './Template';

function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Join Food Rescue Today"
      desc1="Become a part of a community dedicated to reducing food waste and fighting hunger."
      desc2="Sign up now to start contributing to a sustainable future and help those in need."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
