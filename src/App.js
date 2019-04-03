import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>
    </div>
  );
};
