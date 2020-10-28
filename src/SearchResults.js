import React from "react";
import SearchTable1 from "./SearchTable1";
import SearchTable2 from "./SearchTable2";

const SearchResults = props => {
  return (
    <table className="table">
      <SearchTable1 />
      {props.results.map((cliente, index) => {
        console.log(cliente);
        return <SearchTable2 key={index} cliente={cliente} />;
      })}
    </table>
  );
};
export default SearchResults;
