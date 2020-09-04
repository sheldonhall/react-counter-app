import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  }; //state is a special property in react component. A object that contains any data the component needs

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    // Not a string but a jsx expression that ultimately gets converted to React.createElement() that is why we need to import React
    //Also React.createElement() accepts as first param the single element (as a string) if two elements are at the same level as that one, Babel and React.createElement() wont find the second element

    return (
      <div>
        <h5>Counter #{this.props.counter.id}</h5>
        {/* div is a container to hold elements instead of using a div for the problem above */}
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          decrement
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let btnClasses = "badge m-2 badge-";
    btnClasses += this.state.value === 0 ? "warning" : "primary";
    return btnClasses;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
