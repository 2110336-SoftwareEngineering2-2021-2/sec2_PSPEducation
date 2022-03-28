import React, { useState, useEffect } from "react";
import "./searchResult.css";
import SearchCategory from "./SearchCategory";

export default function SearchResult({
  cookie,
  setCookie,
  removeCookie,
  query,
}) {
  return (
    <div className="searchResultPage">
      <SearchCategory keyword={query} />
    </div>
  );
}
