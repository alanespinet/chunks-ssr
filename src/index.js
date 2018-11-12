import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from './client/Routes';

const app = express();

app.use('/api', proxy('http://localhost:7200/'));
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map( ({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then( () => {
    res.send(renderer(req, store));
  })
  .catch( err => console.log(err) );
});

app.listen(3000, console.log('Server running'));
