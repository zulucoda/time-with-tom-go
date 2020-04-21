import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Schedule from '../features/schedule';
import BookingRequest from '../features/booking-request';

const Container = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={Schedule} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/booking-request" component={BookingRequest} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
