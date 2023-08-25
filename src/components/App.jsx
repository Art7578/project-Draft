import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BackgroundComponent from './Background/Background.jsx';
import RegistrationForm from './RegistrationForm/RegistrationForm.jsx';
// import AuthorizationForm from './AuthorizationForm/AuthorizationForm.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <BackgroundComponent />
        <RegistrationForm />
        {/* <AuthorizationForm/> */}
      </div>
    </BrowserRouter>
  );
};

export default App;