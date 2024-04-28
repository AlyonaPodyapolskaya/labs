import React from 'react';
import axios from 'axios';

const UserDelete = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить этого пользователя?')) {
      try {
        await axios.delete(`http://localhost:8000/api/users/${userId}`);
        onDelete(userId);
        alert('Пользователь успешно удален!');
      } catch (error) {
        console.error('Ошибка удаления пользователя:', error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Удалить пользователя</button>
    </div>
  );
};

export default UserDelete;
