import React, { useState, useEffect } from "react";
import "./searchCategory.css";
import SearchResultCard from "./SearchResultCard";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import axios from "axios";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function SearchCategory({ cookie, setCookie, removeCookie }) {
  return (
    <>
      <div className="searchCategoryWrapper">
        <div className="searchCatergoryHeader"> : Search Result Course </div>
        <div className="searchCategoryContent">
          <SearchResultCard />
        </div>
      </div>
      <div className="searchCategoryWrapper">
        <div className="searchCatergoryHeader"> : Search Result Tutor </div>
        <div className="searchCategoryContent">
          <SearchResultCard />
        </div>
      </div>
      <div className="searchCategoryWrapper">
        <div className="searchCatergoryHeader"> : Search Result Subject </div>
        <div className="searchCategoryContent">
          <SearchResultCard />
        </div>
      </div>
    </>
  );
}
