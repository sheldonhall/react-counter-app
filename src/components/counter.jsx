import React, { Component } from "react";

class Counter extends Component {
  //This is called after our component is rendered into the DOM
  //good place to make ajax calls to get data from the server
  componentDidMount() {
    //ajax call
    //this.setState({});
  }

  render() {
    // Not a string but a jsx expression that ultimately gets converted to React.createElement() that is why we need to import React
    //Also React.createElement() accepts as first param the single element (as a string) if two elements are at the same level as that one, Babel and React.createElement() wont find the second element

    return (
      <div>
        {/* div is a container to hold elements instead of using a div for the problem above */}
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          decrement
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
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
    btnClasses += this.props.counter.value === 0 ? "warning" : "primary";
    return btnClasses;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
