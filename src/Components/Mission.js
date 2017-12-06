import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Mission = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h2 className="display-3">Overview</h2>
          <p className="lead">
          The founders met during a hackathon and came up with the idea to create a decision making app for
          indecisive people. This idea later developed into Fork It, a social application which brings friends
          together to embark on end-to-end spontaneous experiences. Our application gamifies the entire planning process
          to make choosing the date, time, group and activity into an enjoyable, instantaneous experience. Lastly, a variety of third-party
          integrations, including Uber, Lyft and Google ensure that users can get to any experiences with just the click of a button.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Mission;
