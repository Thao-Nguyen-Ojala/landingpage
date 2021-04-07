import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
