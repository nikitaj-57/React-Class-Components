import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nikita",
    };

    this.updateName = this.updateName.bind(this);
  }

  updateName(newName) {
    this.setState({
      name: newName,
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={() => this.updateName("Nikita New")}>
          Change name
        </button>
      </React.Fragment>
    );
  }
}
