import React, { Component, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.js";
import Gantt from "./components/Gantt/Gantt.js";
import "./App.css";
import Nav from "./components/Nav/Nav.js";
import CohortForm from "./components/Forms/CohortForm.js";

const data = {
  data: [
    {
      id: 1,
      text: "Task #1",
      start_date: "2019-04-15",
      duration: 3,
      progress: 0.6,
    },
    {
      id: 2,
      text: "Task #2",
      start_date: "2019-04-18",
      duration: 3,
      progress: 0.4,
    },
    {
      id: 3,
      text: "Task #2",
      start_date: "2019-04-18",
      duration: 3,
      progress: 0.4,
    },
  ],
  links: [{ id: 1, source: 1, target: 2, type: "0" }],
};
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="gantt-container">
        <Gantt tasks={data} />
      </div>
      <CohortForm />
      <Router />
    </BrowserRouter>
  );
};
export default App;
