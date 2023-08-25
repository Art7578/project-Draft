import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './AuthorizationForm.module.css';

const AuthorizationForm = () => {
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  return (
    <div>
      <div className={css.authorization_form}>
        <h2 className={css.title}>Sign In</h2>
        <form>
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
            <button className={css.signin_button} type="submit">
              Sign In
            </button>
            <Link to="/registration" className={css.registration_link}>
              Registration
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

export default AuthorizationForm;