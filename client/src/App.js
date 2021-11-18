import React from 'react'
import { Route, Switch } from 'react-router';

import Add from './Pages/Add';
import Errors from './Pages/Errors';
import Home from './Pages/Home';
import './App.css';
import Footer from './Components/Footer';
import BootNav from './Components/BootNav'

function App() {
  return (
    <div className="App">
        <BootNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/*" component={Errors} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
