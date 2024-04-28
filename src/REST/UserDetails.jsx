import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Ошибка получения данных пользователя:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>Детали пользователя</h2>
      <p>Имя: {user.name}</p>
      <p>Фамилия: {user.last_name}</p>
      <p>Возраст: {user.age}</p>
    </div>
  );
};

export default UserDetails;
