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
          together to embark on spontaneous, end-to-end experiences. Our application gamifies the entire planning process
          to make choosing the date, time, group and activity into an enjoyable, instantaneous experience. Furthermore, a variety of third-party
          integrations, including Uber, Lyft and Google, ensures that users can get to any experience with just the click of a button. Fork It is
          based in San Francisco and is currently being developed for beta release in late winter 2018 on iOS. 
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Mission;
