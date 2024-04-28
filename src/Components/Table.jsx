import React from 'react';
import { useTable, useSortBy } from 'react-table';

const ColumnTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [{ id: columns[0].accessor, desc: false }],
      },
    },
    useSortBy
  );

  return (
    <div {...getTableProps()} style={{ overflowX: 'auto' }}>
      <div>
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()} style={{ display: 'flex' }}>
            {headerGroup.headers.map((column, columnIndex) => (
              <div
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                  fontWeight: 'bold',
                  backgroundColor: '#f2f2f2',
                  position: columnIndex === 0 ? 'sticky' : 'static',
                  left: columnIndex === 0 ? 0 : 'auto',
                  zIndex: columnIndex === 0 ? 1 : 'auto',
                }}
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()} style={{ display: 'block', overflowY: 'auto', maxHeight: '400px' }}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <div {...row.getRowProps()} style={{ display: 'flex' }}>
              {row.cells.map((cell, index) => (
                <div
                  {...cell.getCellProps()}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderBottom: '1px solid #ddd',
                    backgroundColor: index === 0 ? '#f2f2f2' : 'white',
                  }}
                >
                  {cell.render('Cell')}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnTable;
