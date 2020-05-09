import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Schedule from '../features/schedule';
import BookingRequest from '../features/booking-request';
import Footer from '../components/footer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { COLOURS } from '../config';

const GlobalOverrideStyle = createGlobalStyle`
  .MuiPickersToolbar-toolbar {
    background-color: ${COLOURS.DARK_BLUE} !important;
    color: ${COLOURS.LIGHT_GRAY} !important;
  }
  .MuiPickersCalendarHeader-daysHeader {
    .MuiPickersCalendarHeader-dayLabel {
      color: ${COLOURS.LIGHT_GRAY} !important;
    }
  }
  .MuiPickersBasePicker-pickerView {
    background-color: ${COLOURS.BLUE} !important;
    color: ${COLOURS.LIGHT_GRAY} !important;
    
    .MuiPickersCalendarHeader-iconButton {
     background-color: ${COLOURS.GREEN} !important;
    }
    
    .MuiPickersDay-day {
      color: ${COLOURS.LIGHT_GRAY} !important;
    }
    .MuiPickersDay-daySelected {
      background-color: ${COLOURS.GREEN} !important;
      color: ${COLOURS.LIGHT_GRAY} !important;  
    }
    .MuiPickersClockNumber-clockNumber {
      color: ${COLOURS.LIGHT_GRAY} !important;
    }
    
    .MuiPickersClockPointer-pointer {
      background-color: ${COLOURS.GREEN} !important;
    }
    
    .MuiPickersClockPointer-thumb {
      border: 14px solid ${COLOURS.GREEN} !important;
    }
    
    .MuiPickersClock-pin {
      background-color: ${COLOURS.GREEN} !important;
    }
  }
  .MuiDialogActions-root {
    background-color: ${COLOURS.BLUE} !important;
    
    .MuiButton-textPrimary {
      color: ${COLOURS.LIGHT_GRAY} !important;
    }
  }
`;

const Container = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <GlobalOverrideStyle />
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Schedule} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/booking-request" component={BookingRequest} />
          </Switch>
          <Footer />
        </Container>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
