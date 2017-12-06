import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Mission = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h2 className="display-3">Mission</h2>
          <p className="lead">The founders met during a hackathon and came up with the idea to create a decision making app for
          indecisive people. This idea became Fork It, an app that produces spontaneous decisions for its users. We liken our app to a kind of
          a work flow aggregator in a sense where users do not have to go to multiple apps and websites in order to research and decide on a place to go or eat.
          Our app will make these decisions for you at high accuracy using our advanced machine learning algorithm which asks the users questions.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Mission;
