import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  outline-color: blueviolet;
`;

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(4).max(14).required(),
});

export const LoginForm = _ => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <br />
        <label>
          Password
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
