import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = () => {
  const initialValues = {
    name: '',
    lastName: '',
    age: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Обязательное поле'),
    lastName: Yup.string().required('Обязательное поле'),
    age: Yup.number().required('Обязательное поле').positive('Должно быть положительным числом'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('http://localhost:8000/api/users/', values);
      resetForm();
      alert('Пользователь успешно создан!');
    } catch (error) {
      console.error('Ошибка создания пользователя:', error);
    }
  };

  return (
    <div>
      <h2>Создать пользователя</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Имя:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="lastName">Фамилия:</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="age">Возраст:</label>
            <Field type="number" id="age" name="age" />
            <ErrorMessage name="age" component="div" className="error" />
          </div>
          <button type="submit">Создать</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
