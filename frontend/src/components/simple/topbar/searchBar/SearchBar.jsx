import React from "react";
import "./searchBar.css";
import { SearchOutlined } from "@mui/icons-material";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <SearchOutlined className="searchIcon" />
      <input
        type="search"
        autoComplete="off"
        spellCheck="false"
        placeholder="Search for course, tutor or subject"
        className="searchInput"
        aria-invalid="false"
      />
    </div>
  );
}
