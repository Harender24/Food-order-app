import { Formik, Form } from "formik";
import MyCheckbox from "../utils/MyCheckbox";
import MySelect from "../utils/MySelect";
import MyTextInput from "../utils/MyTextInput";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.acceptedTerms) {
    errors.acceptedTerms = "Required";
  }

  return errors;
};
const ContactForm = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          issueType: "", // added for our select
        }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        <Form>
          <MyTextInput
            label='First Name'
            name='firstName'
            type='text'
            placeholder='Jane'
          />

          <MyTextInput
            label='Last Name'
            name='lastName'
            type='text'
            placeholder='Doe'
          />

          <MyTextInput
            label='Email Address'
            name='email'
            type='email'
            placeholder='jane@formik.com'
          />

          <MySelect label='Issue Type' name='issueType'>
            <option value=''>Select your Issue</option>
            <option value='Food'>Food</option>
            <option value='Hotel'>Hotel</option>
            <option value='dining'>dining</option>
            <option value='other'>Other</option>
          </MySelect>

          <MyCheckbox name='acceptedTerms'>
            I accept the terms and conditions
          </MyCheckbox>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};
export default ContactForm;
