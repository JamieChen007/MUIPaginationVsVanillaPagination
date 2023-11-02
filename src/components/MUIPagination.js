import { useEffect } from "react";
import { useState } from "react";
import TablePagination from "@mui/material/TablePagination";

const MUIPagination = ({ totalUser, getPaginationInfo }) => {
  const [pageLimit, setPageLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [toIndex, setToIndex] = useState(1);

  useEffect(() => {
    setStartIndex(1 + pageLimit * (currentPage - 1));
    setToIndex(
      pageLimit * currentPage > totalUser ? totalUser : pageLimit * currentPage
    );
  }, [pageLimit, currentPage, totalUser]);

  useEffect(() => {
    getPaginationInfo({
      startIndex,
      toIndex,
    });
  }, [startIndex, toIndex]);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage + 1);
  };
  const handleChangeRowsPerPage = (event) => {
    setPageLimit(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  return (
    <TablePagination
      component="div"
      count={totalUser}
      page={currentPage - 1}
      onPageChange={handleChangePage}
      rowsPerPage={pageLimit}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default MUIPagination;
