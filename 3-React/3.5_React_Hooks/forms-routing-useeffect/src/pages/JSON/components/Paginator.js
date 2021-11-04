import React, { useState, useEffect } from "react";
import Users from "./Users";

const Paginator = ({ json }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesOnPage, setEntriesOnPage] = useState(3);

  useEffect(() => {
    if (currentPage < 1) {
      setCurrentPage(1);
    }
    if (currentPage > json.length / entriesOnPage) {
      setCurrentPage(Math.ceil(json.length / entriesOnPage));
    }
  }, [currentPage, entriesOnPage]);

  return (
    <div>
      <h2>Page: {currentPage}</h2>
      <input
        type="number"
        min="1"
        onChange={(e) => setEntriesOnPage(e.target.value)}
        placeholder="Number of Entries"
      />
      <button onClick={() => setCurrentPage(currentPage - 1)}>Prev Page</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
      <Users data={json} entries={entriesOnPage} page={currentPage} />
    </div>
  );
};

export default Paginator;
