import React, { Component } from "react";

class NavBar extends Component {
  //This is called after our component is rendered into the DOM
  //good place to make ajax calls to get data from the server
  componentDidMount() {
    //ajax call
    //this.setState({});
  }
  render() {
    //console.log("Navbar - rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        {/* only one root element so don't need a wrapper */}
        <a className="navbar-brand" href="http://localhost:3000">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
