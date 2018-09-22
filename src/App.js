import React, { Component } from "react";
import WonderCard from "./components/WonderCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import wonder from "./wonder.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    wonder
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {/* <Title>Clicky Game</Title> */}
        {this.state.wonder.map(wonder => (
          <WonderCard id={wonder.id} key={wonder.id} image={wonder.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
