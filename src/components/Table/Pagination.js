import React from 'react'
import Select from '../Select/Select'

import styles from './pagination.module.css';


const Pagination = (props) => {
  const {
    currentPage,
    totalCount,
    pageSize,
    setPageSize,
    onPageChange,
    className
  } = props;

  const pageNumbers = [];
  const value = Math.ceil(totalCount / pageSize)
  for (let i = 1; i <= value; i++) {
    pageNumbers.push(i);
  }

  const setPreviousPage = () => {
    const prevPage = currentPage - 1 > 0 ? currentPage - 1 : currentPage;
    onPageChange(prevPage);
  }

  const setNextPage = () => {
    const prevPage = currentPage + 1 <= value ? currentPage + 1 : currentPage;
    onPageChange(prevPage);
  }

  const options = [5, 10, 20, 50, 100];

  return (
    <div className={`${styles.pagination} ${className}`} >
      <Select onChange={e => setPageSize(e.target.value)} options={options} />
      <button onClick={setPreviousPage}>&laquo;</button>
      {
        pageNumbers.map((number, i) => {
          return (
            <button
              onClick={() => onPageChange(number)}
              className={number === currentPage && styles.btnHighlight}
            >
              {number}
            </button>
          )
        })
      }
      <button onClick={setNextPage}>&raquo;</button>
    </div>
  );
}

export default Pagination
