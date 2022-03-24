import React, { Component, useEffect } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import "./Gantt.css";

const Gantt = (props) => {
  useEffect(() => {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    const { tasks } = props;
    gantt.init(this.ganttContainer);
    gantt.parse(tasks);
  }, []);

  return (
    <div
      ref={(input) => {
        props.ganttContainer = input;
      }}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default Gantt;
