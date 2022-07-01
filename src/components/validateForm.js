import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
 export const ValidationSchemaExample = () => (
   <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         email: '',
         dob: '',
         name: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
          <div >
            firstnamr

          
             <Field name="firstName"  className="field"/>
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           </div>
          <div>
            lastname
             <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
          </div>
          <div>
            email
             <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 );