import React, { Component } from "react";

class About extends Component {
  randomId = Math.floor(Math.random() * 1000);
  state = {
    id: this.randomId,
    product: "Milk",
  };
  handleDisplay = (e) => {
    e.preventDefault();
    this.props.addGrocery(this.state);
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex mt-3 justify-content-center align-item-center">
          This is About page with state and pass the state into parent.
          <button className="btn-primary" onClick={this.handleDisplay}>
            Display Grocery
          </button>
        </div>
      </div>
    );
  }
}

export default About;
