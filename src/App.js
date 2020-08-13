import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ToDoInput />
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
