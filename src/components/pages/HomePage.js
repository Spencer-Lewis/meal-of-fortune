import React, { Component } from "react";
import styled from "styled-components";
import InputForm from '../InputForm';

const HomeContainer = styled.div`
width: 335px;
margin: 0 auto;
`

class HomePage extends Component {
  state = {}

  handleRandomizeButton = () => {
    console.log("clicked dat button");
  }

  render() {
    return (
      <HomeContainer>
        <h1>MEAL OF FORTUNE!</h1>
        <InputForm
          handleRandomizeButton={this.handleRandomizeButton}
        />
      </HomeContainer>
    );
  }
}

export default HomePage;