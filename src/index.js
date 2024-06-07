import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleRedirect = () => {
  // Check if a redirect is necessary and handle it
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect; // Clear the redirect from storage to prevent loops
  if (redirect && redirect !== window.location.href) {
    window.history.replaceState(
      null,
      null,
      redirect.substring(window.location.origin.length)
    );
  }
};

root.render(
  <React.StrictMode>
    <Router>
      <App onLoad={handleRedirect} />
    </Router>
  </React.StrictMode>
);
