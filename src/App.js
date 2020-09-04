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

  //props here is passed in automagically by reject from the parent when the component is created.
  //Could do object destructuring into method parameters so don't have to be calling props.* all the time
  constructor(props) {
    super(props); //super must be called
    console.log("App - in constructor", this.props); //can't use props unless it was passed
  }

  //This is called after our component is rendered into the DOM
  //good place to make ajax calls to get data from the server
  componentDidMount() {
    console.log("App - mounted");
    //ajax call
    this.setState({});
  }

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
    //react element is created and all it's children are also rendered recursively
    console.log("App - rendered");
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
