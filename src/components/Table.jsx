import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://lib-back-1.onrender.com/db")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredData = data.filter((item) => {
    if (searchTerm === "") return true;
    if (
      searchCategory === "name" &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
    if (
      searchCategory === "author" &&
      item.author.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
    if (
      searchCategory === "subject" &&
      item.subject.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.published) - new Date(b.published);
    } else {
      return new Date(b.published) - new Date(a.published);
    }
  });

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = sortedData.slice(indexOfFirstBook, indexOfLastBook);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <article>
      <div>
        <div>Search by</div>
        <select value={searchCategory} onChange={handleSearchCategoryChange}>
          <option value="name">Name</option>
          <option value="author">Author</option>
          <option value="subject">Subject</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div>Date sort by</div>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <span>Total Books found: {filteredData.length}</span>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.author}</td>
              <td>{item.subject}</td>
              <td>{item.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <flex>
        {pageNumbers.map((number) => (
          <span key={number}>
            {currentPage === number ? (
              <span
                role="button"
                style={{ margin: "5px", background: "green", border:'green' }}
                onClick={() => handleClick(number)}
              >
                {number}
              </span>
            ) : (
              <span
                role="button"
                style={{ margin: "5px" }}
                onClick={() => handleClick(number)}
              >
                {number}
              </span>
            )}
          </span>
        ))}
      </flex>
    </article>
  );
};

export default Table;
