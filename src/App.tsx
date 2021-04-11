import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage';

const breakPointValues = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      small: 500,
      medium768: 768,
    },
  },
};

const theme = createMuiTheme({
  ...breakPointValues,
});

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    small: true;
    medium768: true;
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar />
        <Router>
          <Switch>
            <Route path='/' exact component={LandingPage} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
