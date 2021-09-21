import React, { useState } from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';


const Table = ({ pageSize = 15, columns, data, ...rest }) => {
  const [pageSizeState, setPageSizeState] = useState(pageSize); 
  return (
    <ReactTable
      data={data}
      columns={columns}
      pageSize={pageSizeState}
      showPagination
      onPageSizeChange={(size) => setPageSizeState(size)}
      // showPageSizeOptions={false}
      {...rest}
    />
  )
};

export default Table;
