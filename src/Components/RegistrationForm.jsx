import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';

const RegistrationForm = () => {
  const handleSubmit = useCallback((values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    alert('Пользователь зарегистрирован.');
  }, []);

  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Форма регистрации</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Введите имя пользователя';
          }
          if (!values.email) {
            errors.email = 'Введите адрес электронной почты';
          }
          if (!values.password) {
            errors.password = 'Введите пароль';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '150px', marginRight: '10px' }}>Имя пользователя:</label>
              <Field type="text" name="username" />
            </div>
            <ErrorMessage name="username" component="div" style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }} />

            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '150px', marginRight: '10px' }}>Email:</label>
              <Field type="email" name="email" />
            </div>
            <ErrorMessage name="email" component="div" style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }} />

            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '150px', marginRight: '10px' }}>Пароль:</label>
              <Field type="password" name="password" />
            </div>
            <ErrorMessage name="password" component="div" style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }} />

            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting} sx={{ margin: '10px' }}>
              Зарегистрироваться
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
