import React from 'react';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

 const OnboardingForm = ({errors, touched}) => {
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
          {touched.name && errors.name && <p className="error">{errors.name}</p>}
          <Field 
            component="input"
            type="text"
            name="email"
            placeholder="Email"
          />
          {touched.email && errors.email && <p className="error">{errors.email}</p>}
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
            {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
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
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Enter your Name'),
    email: Yup.string().email(' ').required('Enter your Email'),
    password: Yup.string().required('Enter your password'),
    tos: Yup.boolean().required('Agree to proceed')
  })
})

 const FormikOnboardingForm = formikHOC(OnboardingForm)


 export default FormikOnboardingForm 