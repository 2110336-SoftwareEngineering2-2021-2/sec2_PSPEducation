import React, { useState, useEffect } from "react";
import "./searchBar.css";
import { SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ cookie, setCookie, removeCookie, setQuery }) {
  let navigate = useNavigate();

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
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && navigate("/tutor/search", { replace: true });
        }}
      />
    </div>
  );
}
