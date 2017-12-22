import React from "react";
import "./css/ToDoList.css";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }
  createTaskTitle(itemT, indexT) {
    return (
      <div className="ToDoList" key={indexT}>
        <h5> Title </h5> {itemT}
      </div>
    );
  }
  createTaskDescription(itemD, indexD) {
    return (
      <div className="ToDoList" key={indexD}>
        <h5> Description</h5> {itemD}
      </div>
    );
  }

  render() {
    console.log("Call me");

    const todoentriesTitle = this.props.entriesTitle;
    const todoentriesDescription = this.props.entriesDescription;
    console.log(todoentriesTitle);
    console.log(todoentriesDescription);
    return (
      <div>
        <div className="List-header"> To Do Items </div>

        {todoentriesTitle.map((itemT, indexT) => {
          return this.createTaskTitle(itemT, indexT);
        })}

        {todoentriesDescription.map((itemD, indexD) => {
          return this.createTaskDescription(itemD, indexD);
        })}
      </div>
    );
  }
}
