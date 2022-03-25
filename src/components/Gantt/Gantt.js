import React, { useEffect, useRef } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import "./Gantt.css";


// export default class Gantt extends Component {
//   componentDidMount() {
//       gantt.config.date_format = "%Y-%m-%d %H:%i";  
//       const { tasks } = this.props;
//       gantt.init(this.ganttContainer);
//       gantt.parse(tasks);
//   }

//   render() {
//      return (
//          <div
//               ref={ (input) => { this.ganttContainer = input } }
//               style={ { width: '100%', height: '100%' } }
//           ></div>
//      );
//   }
// }


const Gantt = (props) => {
  const { tasks } = props
  const containerRef = useRef(null);
  useEffect(() => {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    gantt.init(containerRef.current);
    gantt.parse(tasks);
    console.log(gantt)
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default Gantt;
