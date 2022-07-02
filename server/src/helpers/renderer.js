import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Routes from '../client/Routes';

export const requestHandler = (req, res) => {
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.path}>
      <Routes />
    </StaticRouter>
  );

  const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
`;
  res.send(html);
};
