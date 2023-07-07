import { useTable, useGlobalFilter, usePagination } from "react-table";
import BaseSearch from "./BaseSearch";
import { DOTS, customPagination } from "./BasePagination";
import { useEffect } from "react";
export default function BaseTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );
  const { pageIndex } = state;
  const paginationRange = customPagination({
    totalPageCount: pageCount,
    currentPage: pageIndex,
  });
  useEffect(() => {
    setPageSize(5);
  }, [setPageSize]);

  // Render the UI for your table and the styles
  return (
    <div className="mt-2 flex flex-col">
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <BaseSearch
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200"
            >
              <thead className="bg-gray-10">
                {headerGroups?.map((headerGroup, rowIndex) => (
                  <tr {...headerGroup.getHeaderGroupProps()} key={rowIndex}>
                    {headerGroup.headers?.map((column, colIndex) => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-6 py-5 text-left text-20 font-medium text-gray-400 uppercase rounded-sm tracking-wider"
                        key={colIndex}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {page?.map((row, rowI) => {
                  prepareRow(row);
                  return (
                    <tr {...row?.getRowProps()} key={rowI}>
                      {row?.cells.map((cell, colJ) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-10 whitespace-nowrap"
                            key={colJ}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="py-3 flex items-center text-center justify-center pt-10">
              <nav aria-label="Page navigation example">
                <ul className="list-style-none flex">
                  <li>
                    <a
                      className="relative block cursor-pointer rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      Previous
                    </a>
                  </li>
                  {paginationRange?.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                      return <div key={index}>...</div>;
                    }

                    if (pageNumber - 1 === pageIndex) {
                      return (
                        <li key={index}>
                          <a
                            className="relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            key={index}
                            onClick={() => gotoPage(pageNumber - 1)}
                          >
                            {pageNumber}
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={index}>
                        <a
                          className="relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                          key={index}
                          onClick={() => gotoPage(pageNumber - 1)}
                        >
                          {pageNumber}
                        </a>
                      </li>
                    );
                  })}

                  <li>
                    <a
                      className="relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
