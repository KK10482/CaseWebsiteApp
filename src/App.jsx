import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import page from "./Pages/Pages";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <div className="header">
        <Router>
          <CssBaseline />
          <Container fixed>
            <Header />
            <Switch>
              <Route path='/' exact component={page.Home} />
              <Route path='/Forms' component={page.Form} />
              <Route path='/Contact' component={page.Contact} />
            </Switch>
          </Container>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
