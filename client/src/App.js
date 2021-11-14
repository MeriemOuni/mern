import React from 'react'
import { Route, Switch } from 'react-router';

import Add from './Pages/Add';
import Errors from './Pages/Errors';
import Home from './Pages/Home';

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Edit from './Pages/Edit';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Link to="/"><Button style={{marginBottom:'20px'}}>Contact List</Button></Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/edit" component={Edit} />
          <Route path="/*" component={Errors} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
