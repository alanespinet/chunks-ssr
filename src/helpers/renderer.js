import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import Routes from '../client/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{ renderRoutes(Routes) }</div>
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
        <title>Code Chunks</title>
        <link href="https://fonts.googleapis.com/css?family=Anton|Lato:300,400,700" rel="stylesheet">
      </head>
      <body>
        <div id="root">${ content }</div>
        <script>
          window.INITIAL_STATE = ${ serialize( store.getState() ) }
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
