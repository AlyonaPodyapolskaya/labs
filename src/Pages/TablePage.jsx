import React from 'react';
import ColumnTable from '../Components/Table';

const TablePage = () => {

  const columns = [
    {
      Header: 'Название',
      accessor: 'title', 
    },
    {
      Header: 'Автор',
      accessor: 'author',
    },
    {
      Header: 'Жанр',
      accessor: 'genre',
    },
  ];

  const booksData = [
    { title: 'Война и мир', author: 'Лев Толстой', genre: 'Роман' },
    { title: 'Преступление и наказание', author: 'Федор Достоевский', genre: 'Роман' },
    { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', genre: 'Фэнтези' },
    { title: '1984', author: 'Джордж Оруэлл', genre: 'Научная фантастика' },
    { title: 'Унесенные ветром', author: 'Маргарет Митчелл', genre: 'Роман' },
    { title: 'Анна Каренина', author: 'Лев Толстой', genre: 'Роман' },
    { title: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг', genre: 'Фэнтези' },
    { title: 'Три товарища', author: 'Эрих Мария Ремарк', genre: 'Роман' },
    { title: 'Маленький принц', author: 'Антуан де Сент-Экзюпери', genre: 'Сказка' },
    { title: 'Алиса в стране чудес', author: 'Льюис Кэрролл', genre: 'Фэнтези' },
  ];

  return (
    <div>
      <ColumnTable columns={columns} data={booksData} />
    </div>
  );
};

export default TablePage;
