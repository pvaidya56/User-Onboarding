import React from 'react';
import './App.css';
import OnboardingForm from './components/OnboardingForm.js'
import Formik from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <h1>Welcome</h1>
      <h2>Please sign in</h2>
      <OnboardingForm />
    </div>
  );
}

 export default App;