import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <footer />
    </Router>
  );
}

export default App;
