import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
