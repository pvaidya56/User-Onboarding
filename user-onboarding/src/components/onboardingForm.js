import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

 const OnboardingForm = ({errors, touched, values, status}) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    if(status) {
      setUsers([...users, status])
    }
  }, [status])

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
            type="password"
            name="password"
            placeholder="Password"
            htmlFor="password"
          />
           {touched.password && errors.password && <p className="error">{errors.password}</p>}
          <label className="tos">I have read and accept the Terms of Service
            <Field 
              type="checkbox"
              name="tos"
              checked={values.tos}
            />
            {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
            <span className="checkmark" />
          </label>
          <button>Submit!</button>
        </div>
      </Form>  
      {users.map(user => {
        return (
          <div>
            <p key={user.id}><span>Welcome, </span>{user.name}</p>
            <p key={user.id}><span>You are logged in with email: </span>{user.email}</p>
          </div>  
      )})}
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
    tos: Yup.boolean().oneOf([true], 'Please read and agree to the terms of service to proceed')
	  }),

   handleSubmit(values, { setStatus }) {
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => setStatus(res.data))
      .catch(err => console.error(err))
  }
  })


 const FormikOnboardingForm = formikHOC(OnboardingForm)


 export default FormikOnboardingForm 