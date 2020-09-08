import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import ConfigureStore from "./store";
import {
  counterIncrement,
  counterDecrement,
  countersReset,
  counterDelete,
} from "./actions/CounterActions";

class App extends Component {
  state = {
    store: null,
    counters: [],
  }; //state is a special property in react component. A object that contains any data the component needs

  //props here is passed in automagically by reject from the parent when the component is created.
  //Could do object destructuring into method parameters so don't have to be calling props.* all the time
  /*constructor(props) {
    super(props); //super must be called
    console.log("App - in constructor", this.props); //can't use props unless it was passed
  }*/

  //This is called after our component is rendered into the DOM
  //good place to make ajax calls to get data from the server
  componentDidMount() {
    const store = ConfigureStore();
    console.log(store);
    this.initialiseLocalState(store);
    //this.updateState();
  }

  handleDelete = (counterId) => {
    //const counters = this.state.counters.filter((c) => c.id !== counterId);
    //this.setState({ counters }); //{counters} is a simplication of {counters: counters} cause key and value is the same

    this.state.store.dispatch(counterDelete(counterId));
    //this.updateState();
  };

  handleReset = () => {
    /*const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });*/
    //this.setState({ counters }); // can be shortened

    this.state.store.dispatch(countersReset());
    //this.updateState();
  };

  handleIncrement = (counter) => {
    /*const counters = this.state.counters.map((c) => {
      if (c.id === counter.id) c.value++;
      return c;
    });*/
    //this.setState({ counters });

    this.state.store.dispatch(counterIncrement(counter.id));
    //this.updateState();
  };

  handleDecrement = (counter) => {
    /*const counters = this.state.counters.map((c) => {
      if (c.id === counter.id) c.value--;
      return c;
    });*/
    this.state.store.dispatch(counterDecrement(counter.id));
    //this.updateState();
  };

  initialiseLocalState(store) {
    const sharedState = store.getState();
    console.log("Shared state", sharedState);
    this.setState({ store, counters: sharedState.counters }, () => {
      console.log(this.state);
      this.updateState();
    });
  }

  updateState() {
    this.state.store.subscribe(() => {
      const sharedState = this.state.store.getState();
      const updatingState = { ...this.state };
      updatingState.counters = sharedState.counters;
      this.setState(updatingState);
    });
  }

  render() {
    //react element is created and all it's children are also rendered recursively
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
