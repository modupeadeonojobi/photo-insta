import React, { Component } from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Main extends Component {

  render() {
    return (
      <BrowserRouter>
        <Title title={'Photowall'} />
        <Switch>
          <Route exact path="/">
            <Photowall {...this.props} />
          </Route>
          <Route path="/add-photo" render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default Main;
