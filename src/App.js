import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import bandeja from './components/bandeja';


function App() {

  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path='/' exact component={bandeja} />
      </div>
    </Router>
  );
}

export default App;
