import React from 'react';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

 const OnboardingForm = () => {
  return (
    <div className="onboarding-form">
      <Form>
        <div className="form-fields-wrapper">
          <Field 
            component="input"
            type="text"
            name="name"
            placeholder="Name"
          />
          <Field 
            component="input"
            type="text"
            name="email"
            placeholder="Email"
          />
          <Field 
            component="input"
            type="text"
            name="password"
            placeholder="Password"
          />
          <label className="tos">I have read and accept the Terms of Service
            <Field 
              type="checkbox"
              name="tos"
            />
            <span className="checkmark" />
          </label>
          <button>Submit!</button>
        </div>
      </Form>  
    </div>
  )
}

 const formikHOC = withFormik({
  mapPropsToValues({name, email, password, tos}) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    }
  }
})

 const FormikOnboardingForm = formikHOC(OnboardingForm)


 export default FormikOnboardingForm 