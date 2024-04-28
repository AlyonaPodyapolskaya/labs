import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserEditForm = ({ userId }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Обязательное поле'),
    lastName: Yup.string().required('Обязательное поле'),
    age: Yup.number().required('Обязательное поле').positive('Должно быть положительным числом'),
  });

  const handleSubmit = async (values) => {
    try {
      await axios.put(`http://localhost:8000/api/users/`, {
        id: userId,
        ...values,
      });
      alert('Пользователь успешно обновлен!');
    } catch (error) {
      console.error('Ошибка обновления пользователя:', error);
    }
  };

  return (
    <div>
      <h2>Редактировать пользователя</h2>
      <Formik
        initialValues={{ name: '', lastName: '', age: '' }}
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
          <button type="submit">Сохранить</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserEditForm;
