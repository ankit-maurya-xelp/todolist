import React from "react";
import "./css/bodyComponent.css";
import ToDoList from "./toDoList";

export default class BodyComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: [],
      descriptions: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    let itemTitle = document.getElementById("input").value;
    let itemDescription = document.getElementById("description").value;
    let itemArrayTitle = this.state.items;
    let itemArrayDescription = this.state.descriptions;
    if (itemTitle !== "" && itemDescription !== "") {
      itemArrayTitle.push(itemTitle);

      itemArrayDescription.push(itemDescription);
      this.setState({
        items: itemArrayTitle,
        descriptions: itemArrayDescription
      });
    }

    console.log(itemArrayTitle);
    console.log(itemArrayDescription);
  }

  render() {
    return (
      <div className="BodyComponent">
        <div className="BodyComponent-left">
          <div className="Title">ADD TO DO</div>
          <input className="Title-btn" id="input" placeholder="To DO TITLE" />

          <textarea
            rows="4"
            cols="50"
            id="description"
            className="Description-btn"
            placeholder="TO DO DESCRIPTION"
          />
          <div className="Control-btn">
            <button className="Save-btn" onClick={() => this.addItem()}>
              {" "}
              SAVE
            </button>
            <button className="Reset-btn"> RESET</button>
          </div>
        </div>

        <div className="BodyComponent-right">
          <ToDoList
            entriesTitle={this.state.items}
            entriesDescription={this.state.descriptions}
          />
        </div>
      </div>
    );
  }
}
