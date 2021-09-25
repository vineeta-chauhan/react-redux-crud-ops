import React, { useState, useEffect } from 'react';

import Pagination from './Pagination';

import styles from './table.module.css';


const Table = (props) => {
  const { data = [], columns = [], pageSize = 5 } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSizeState, setPageSizeState] = useState(pageSize);
  const [paginatedData, setPaginatedData] = useState(
    data.slice(0, pageSize)
  );

  useEffect(() => {
    setPaginatedData((
      data.slice((currentPage - 1) * pageSizeState, currentPage * pageSizeState)
    ))
  }, [currentPage, pageSizeState, data,])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tableContainer} >
        <table >
          <tr>
            {
              columns.map(ele => (
                <th className={ele.headerClassName}>{ele.Header}</th>
              ))
            }
          </tr>
          {
            paginatedData.map((ele) => {
              return (
                <tr>
                  {
                    columns.map(colum => {
                      const { Cell, width, height } = colum;
                      return <td style={{ width, height }} >
                        {Cell ? <Cell {...ele} /> : colum.accessor(ele)}
                      </td>
                    })
                  }
                </tr>
              );
            })
          }
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSizeState}
        setPageSize={setPageSizeState}
        onPageChange={setCurrentPage}
        className={styles.paginationContainer}
      />

    </div>
  )
};

export default Table;

