import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/menu/Menu.js'
import Blog from './components/pages/blog/Blog.js'

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="app" className="container">
        <header class="blog-header py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
              <a class="text-muted" href="#">Subscribe</a>
            </div>
            <div class="col-4 text-center">
              <a class="blog-header-logo text-dark" href="#">Large</a>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center">
              <a class="text-muted" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
              </a>
              <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
            </div>
          </div>
        </header>

        <Router>
        <div>
          <Menu/>
          <div className="target-page">
            <Switch>
              <Route path="/" exact component={Blog} />
              <Route path="/" component={Blog} />
            </Switch>
          </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;

