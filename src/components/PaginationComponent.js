import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


function PaginationComponent({ page, changePage, total_pages }) {
    return (
        <Pagination className='shadow-none'>
          <Pagination.First onClick={() => changePage(1)} />
          {page > 1 ? 
            <Pagination.Item onClick={() => changePage(page - 1)}>{page - 1}</Pagination.Item>
          :
            <Pagination.Prev onClick={() => changePage(page - 1)}  />
          }
          <Pagination.Item active>{page}</Pagination.Item>
          {page < total_pages ? 
            <Pagination.Item onClick={() => changePage(page + 1)}>{page + 1}</Pagination.Item>
          :
          <Pagination.Next onClick={() => changePage(page + 1)} />
          }
          <Pagination.Last onClick={() => changePage(total_pages)} />
        </Pagination>
      );
}

export default PaginationComponent;