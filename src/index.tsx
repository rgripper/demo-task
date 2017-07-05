import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from "history";
import { createAppActions } from "store/app/createAppActions";
import { configureStore } from "store/configureStore";
import { PeopleService } from 'services/PeopleService';
import { AppContainer } from "app/AppContainer";

import './index.scss';

const store = configureStore();
const history = createBrowserHistory();
const actions = createAppActions(store);

const peopleService = new PeopleService();

// load initial data into the store
peopleService.getAll().then(x => actions.loadPeople(x));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={() => <AppContainer></AppContainer> }>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);