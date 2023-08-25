import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  return (
    <div>
      <div className={css.registration_form}>
        <h2 className={css.title}>Registration</h2>
        <form>
          <div className={css.form_group}>
            <input
              type="text"
              placeholder="Name"
              className={`${css.input} ${nameActive ? css.active : ''}`}
              onFocus={() => setNameActive(true)}
              onBlur={() => setNameActive(false)}
            />
          </div>
          <div className={css.form_group}>
            <input
              type="email"
              placeholder="Email"
              className={`${css.input} ${emailActive ? css.active : ''}`}
              onFocus={() => setEmailActive(true)}
              onBlur={() => setEmailActive(false)}
            />
          </div>
          <div className={css.form_group}>
            <input
              type="password"
              placeholder="Password"
              className={`${css.input} ${passwordActive ? css.active : ''}`}
              onFocus={() => setPasswordActive(true)}
              onBlur={() => setPasswordActive(false)}
            />
          </div>
          <div className={css.buttons}>
            <button className={css.signup_button} type="submit">
                Sign Up
            </button>
            <Link to="/signin" className={css.signin_link}>
                Sign In
            </Link>
          </div>
        </form>
      </div>
        <div>
          <div className={css.image_half}></div>
        </div>
    </div>
  );
};

export default RegistrationForm;