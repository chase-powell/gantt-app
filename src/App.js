import React, { Component } from "react";
import { SVGGantt, CanvasGantt, StrGantt } from 'gantt';
import "./App.css";

const data = [{
  id: 1,
  type: 'group',
  text: '1 Waterfall model',
  start: new Date('2018-10-10T09:24:24.319Z'),
  end: new Date('2018-12-12T09:32:51.245Z'),
  percent: 0.71,
  links: []
}, {
  id: 11,
  parent: 1,
  text: '1.1 Requirements',
  start: new Date('2018-10-21T09:24:24.319Z'),
  end: new Date('2018-11-22T01:01:08.938Z'),
  percent: 0.29,
  links: [{
    target: 12,
    type: 'FS'
  }]
}, {
  id: 12,
  parent: 1,
  text: '1.2 Design',
  start: new Date('2018-11-05T09:24:24.319Z'),
  end: new Date('2018-12-12T09:32:51.245Z'),
  percent: 0.78,
}];

new SVGGantt('#svg-root', data, {
  viewMode: 'week'
});

new CanvasGantt('#canvas-root', data, {
  viewMode: 'week'
});

const strGantt = new StrGantt(data, {
  viewMode: 'week'
});
this.body = strGantt.render();


class App extends Component {
  render() {
    return (
      <div>
        <div className="gantt-container">
          <Gantt tasks={data} />
        </div>
      </div>
    );
  }
}
export default App;
