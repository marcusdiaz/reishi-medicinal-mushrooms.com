import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/menu/Menu.js'
import Home from './components/pages/Home.js'
import Blog from './components/pages/blog/Blog.js'
import Projects from './components/pages/Projects.js'
import Contact from './components/pages/Contact.js'

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="app">
        <Router>
        <div>
        <Menu/>
        <div className="target-page">
          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/" component={Blog} />
            <Route path="/article1" exact component={Projects} />
            <Route path="/article2" exact component={Projects} />
            <Route path="/article3" exact component={Contact} />
          </Switch>
        </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;

