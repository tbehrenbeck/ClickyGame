import React, { Component } from "react";
import WonderCard from "./components/WonderCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import wonder from "./wonder.json";
import Title from "./components/Title";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    wonder
  };

  // Handle a click
  handleClick = id => {
    alert("clicked");
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Title />
        {this.state.wonder.map(wonder => (
          <WonderCard
            id={wonder.id}
            key={wonder.id}
            image={wonder.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
