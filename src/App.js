import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
//Then, when we need an id just invoke uuidv4()
class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 1, title: "breakfast" },
      { id: 1, title: "work" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("handle change");
  };
  handleSubmit = (e) => {
    console.log("handle Submit");
  };
  clearList = () => {
    console.log("clear list");
  };
  handleDelete = (id) => {
    console.log(`handle Delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle Edit ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-suto col-md-8 m-5"></div>
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <ToDoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
          ></ToDoInput>
          <ToDoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
