import React from "react";
import {
  Container,
  Header,
  Icon
} from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h1" floated="left">
          <Icon name="arrow left" />
          Home Page
        </Header>
      </Container>
    );
  }
}

export default Home;
