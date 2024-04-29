import React, { useEffect } from 'react';
import { useGetUsersQuery } from './api';
import { Hourglass } from 'react-loader-spinner';

const UserList = () => {
  const { data: users, isError, isLoading, isFetching } = useGetUsersQuery();

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) return <Hourglass color="#00BFFF" height={100} width={100} />;
  if (isError) return <div>Ошибка: список пользователей не загружен</div>;

  return (
    <div>
      {isFetching && <div>Fetching...</div>}
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
