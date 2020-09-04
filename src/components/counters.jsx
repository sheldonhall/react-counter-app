import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //This is called after our component is rendered into the DOM
  //good place to make ajax calls to get data from the server
  componentDidMount() {
    //console.log("Counters - mounted");
    //ajax call
    //this.setState({});
  }

  render() {
    // Not a string but a jsx expression that ultimately gets converted to React.createElement() that is why we need to import React
    //Also React.createElement() accepts as first param the single element (as a string) if two elements are at the same level as that one, Babel and React.createElement() wont find the second element

    //console.log("Counters - rendered");

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
