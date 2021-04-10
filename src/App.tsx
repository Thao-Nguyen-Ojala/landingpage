import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      small: 500,
      medium: 768,
      large: 960,
    },
  },
});

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    small: true;
    medium: true;
    large: true;
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
