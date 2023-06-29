import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

export default function PaginationTest({ setCurPage, totalPage, pageSize, setPageSize }) {
  const pageSizeOptions = [5, 10, 15];
  const [activePage, setActivePage] = useState(0);

  const handlePageClick = (event) => {
    setCurPage(event.selected + 1);
    setActivePage(event.selected);
  };

  const handlePageSizeChange = (event) => {
    setCurPage(1);
    setPageSize(Number(event.target.value));
    setActivePage(0);
  };

  useEffect(() => {
    setActivePage(0); // update active page index when component rerenders
  }, [totalPage, pageSize]);

  return (
    <>
      <div className="flex items-center justify-center my-4">
        <span className="mr-2">Page size:</span>
        <select
          className="p-2 border border-gray-300 rounded-lg shadow-md"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        pageClassName="inline-block mx-2"
        pageLinkClassName="py-2 px-4 bg-white rounded-lg shadow-md text-gray-700 hover:bg-gray-100"
        activeClassName="bg-blue-500 text-white" // custom class for active page button
        activeLinkClassName="py-2 px-4 bg-black rounded-lg shadow-md text-white"
        previousClassName="inline-block mx-2"
        previousLinkClassName="py-2 px-4 bg-white rounded-lg shadow-md text-gray-700 hover:bg-gray-100"
        nextClassName="inline-block mx-2"
        nextLinkClassName="py-2 px-4 bg-white rounded-lg shadow-md text-gray-700 hover:bg-gray-100"
        containerClassName="flex items-center justify-center my-4"
        pageCount={totalPage}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        forcePage={activePage} // set initially active page
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
      />
    </>
  );
}