import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }; //state is a special property in react component. A object that contains any data the component needs

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters }); //{counters} is a simplication of {counters: counters} cause key and value is the same
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters }); // can be shortened
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      if (c.id === counter.id) c.value++;
      return c;
    });

    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      if (c.id === counter.id) c.value--;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    // Not a string but a jsx expression that ultimately gets converted to React.createElement() that is why we need to import React
    //Also React.createElement() accepts as first param the single element (as a string) if two elements are at the same level as that one, Babel and React.createElement() wont find the second element
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
