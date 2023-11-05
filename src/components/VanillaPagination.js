import { useEffect } from "react";
import { useState } from "react";

const VanillaPagination = ({ totalUser, getVanillaPaginationInfo }) => {
  const [pageLimit, setPageLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = 1 + pageLimit * (currentPage - 1);
  const toIndex =
    pageLimit * currentPage > totalUser ? totalUser : pageLimit * currentPage;

  const onOptionChange = (value) => {
    setPageLimit(value);
    setCurrentPage(1);
  };

  const onPrevBtnClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const onNextBtnClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    getVanillaPaginationInfo({
      startIndex,
      toIndex,
    });
  }, [startIndex, toIndex]);

  const notClickStyles = {
    pointerEvents: "none",
    color: "lightgrey",
    margin: "0 10px",
    width: "40px",
  };
  const ClickStyles = {
    pointerEvents: "auto",
    color: "black",
    margin: "0 10px",
    width: "40px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "10px auto",
      }}
    >
      <label htmlFor="pageLimit" style={{ margin: "0 10px" }}>
        Rows per page:
      </label>
      <select
        id="pageLimit"
        onChange={(e) => onOptionChange(e.target.value)}
        style={{ margin: "0 10px" }}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span style={{ margin: "0 10px" }}>
        {startIndex}-{toIndex} of {totalUser}
      </span>
      <button
        style={currentPage === 1 ? notClickStyles : ClickStyles}
        onClick={onPrevBtnClick}
      >{`<`}</button>
      <button
        style={
          currentPage === Math.ceil(totalUser / pageLimit)
            ? notClickStyles
            : ClickStyles
        }
        onClick={onNextBtnClick}
      >{`>`}</button>
    </div>
  );
};

export default VanillaPagination;
