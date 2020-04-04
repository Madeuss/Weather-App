import React from 'react';
import { BrowserRoute, Route, Switch } from 'react-router-dom';


// import Component from './components/...';

export default function Routes() {
  return (
    <BrowserRoute>
        <Switch>
            <Route path="/" exact component={{/*component*/}} />
        </Switch>
    </BrowserRoute>
  );
}
