import React, { useEffect, useRef, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import { AiFillPlusCircle } from "react-icons/ai";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import "./Gantt.css";

const Gantt = (props) => {
  const [columns, setColumns] = useState();

  const { tasks } = props;
  const containerRef = useRef(null);

  useEffect(() => {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    gantt.init(containerRef.current);
    gantt.parse(tasks);
  }, []);

  document.addEventListener("DOMContentLoaded", (event) => {
    gantt.config.columns = [
      {
        name: "text",
        label: "Task Name",
        width: "150",
        tree: true,
        resize: true,
      },
      {
        name: "Start Date",
        label: "Start Date",
        align: "center",
        resize: true,
      },
      {
        name: "End Date",
        label: "End Date",
        align: "center",
        width: 100,
      },
      {
        name: "add",
        label: "add",
        align: "center",
        width: 100,
      },
      {
        name: "Edit",
        label: "Edit",
        align: "center",
        width: 100,
      },
    ];
  });

  return (
    <div>
      {/* <button onClick={setState(1)}></button> a */}
      <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Gantt;
