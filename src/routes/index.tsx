import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" exact component={Repository} />
  </Switch>
);

// Esse '+' que tem na url é pra falar que o "nome do repository" é tudo o que tem depois da barra

export default Routes;
