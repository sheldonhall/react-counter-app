import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
