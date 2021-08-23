import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./SearchBox.css";

const SearchBox = ({ setSearchText }) => {
  //   const [searchText, setSearchText] = useState("");
  // useEffect(() => {
  //   console.log("Search===>", searchText);
  // }, [searchText]);
  return (
    <div className="searchfiltermain">
      <Form.Control
        placeholder="search products..."
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      ></Form.Control>
    </div>
  );
};

export default SearchBox;
