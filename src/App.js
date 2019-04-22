import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home.js';
import { About } from './About.js';
import { Contact } from './Contact.js';
import { NoMatch } from './NoMatch.js';
import { Layout } from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { FooterPage } from './components/FooterPage';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default App;
