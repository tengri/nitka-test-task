import * as React from 'react';
import './App.css';
import { MainPage } from "./MainPage";
import { LayoutPage } from './LayoutPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createStore } from 'redux';
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { AppState } from "./interfaces";

const initState: AppState = {text: ''};
const store = createStore(reducers, initState);

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/layout">
              <LayoutPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
